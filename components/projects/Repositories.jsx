"use client";
import React from "react";

// components
import CardItems from "../CardItem";
import SkeletonCard from "../SkeletonCard";

// hooks
import useRepositories from "@/hooks/useRepository";

const Repositories = () => {
  const repositories = useRepositories();

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-UK", options);

    return `Updated on ${formattedDate}`;
  };

  function hexToRgb(hex) {
    // Remove the hash if it exists
    hex = hex.replace(/^#/, "");

    // Parse the hex values
    const bigint = parseInt(hex, 16);

    // Extract the RGB components
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Return the RGB color
    return { r, g, b };
  }

  const styleCircles = (rgbColor) => {
    return {
      fill: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`,
      color: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`,
    };
  };

  const getProjectsCard = (data) => {
    return data
      ? data.map((item, index) => {
          const style = item.primaryLanguage
            ? styleCircles(hexToRgb(item.primaryLanguage.color))
            : null;
          return (
            <a href={item.url} key={index} target="_blank">
              <CardItems
                cardsStyle="cursor-pointer flex w-full h-full flex-col transition-all duration-300 hover:border-ring"
                title={item.name}
                description={
                  item.description
                    ? item.description
                    : "This repository have not a description"
                }
                contents={
                  <div className="flex flex-row space-x-4 text-sm text-muted-foreground">
                    {/* languages */}
                    <div className="flex items-center gap-1">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1 h-3 w-3"
                          style={style}
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </div>
                      {item.primaryLanguage ? item.primaryLanguage.name : null}
                    </div>
                    {/* time */}
                    <div>{formatDate(item.updatedAt)}</div>
                  </div>
                }
              />
            </a>
          );
        })
      : Array.from({ length: 6 }).map((_, index) => {
          return <SkeletonCard key={index} />;
        });
  };

  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 py-8">
          {/* content */}
          <div className="grid gap-8 md:grid-cols-2">
            {getProjectsCard(repositories)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repositories;
