import { configDotenv } from "dotenv";
configDotenv({ path: "../../" });
import React from "react";

// components
import CardItems from "../CardItem";
import { FaArrowRight } from "react-icons/fa";

// Fetching Data
const fetchDataGithub = async () => {
  try {
    const data = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        {
          user(login: "thai-cong-nguyen") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  createdAt
                  updatedAt
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      `,
      }),
    });
    const result = await data.json();
    const pinnedRepositories = result.data.user.pinnedItems.nodes;
    return pinnedRepositories ? pinnedRepositories : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

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

const OpenSourceProject = async () => {
  const pinnedRepositories = await fetchDataGithub();
  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 py-8">
          {/* title */}
          <div className="flex w-fit items-end">
            <h2 className="title">Open Source Projects</h2>
          </div>
          {/* content */}
          <div className="grid gap-8 md:grid-cols-2">
            {pinnedRepositories
              ? pinnedRepositories.map((item, index) => {
                  const style = styleCircles(
                    hexToRgb(item.primaryLanguage.color)
                  );
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
                              {item.primaryLanguage.name}
                            </div>
                            {/* time */}
                            <div>{formatDate(item.updatedAt)}</div>
                          </div>
                        }
                      />
                    </a>
                  );
                })
              : ""}
          </div>
          <div className="flex justify-end">
            <a href="/projects">
              <div className="group flex items-center gap-px transition-colors hover:text-blue cursor-pointer font-medium">
                <span>View All</span>
                <FaArrowRight
                  size={13}
                  className="ml-1 w-4 transition-transform group-hover:translate-x-1"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceProject;
