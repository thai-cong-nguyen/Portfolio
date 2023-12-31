import React from "react";

// components
import TimelineItem from "./TimelineItem";

import Azuki from "@/public/azuki.png";
import UIT from "@/public/Logo_UIT_updated.ico";
import LearnWeb3 from "@/public/LearnWeb3.png";

const timelineData = [
  {
    company: "University of Information Technology (UIT)",
    position: "Student",
    startAt: "Aug 2021",
    endAt: "Present",
    image: UIT,
    description:
      "I am currently a third-year Software Engineering student at the University of Information Technology in Vietnam, with a particular focus on exploring the realms of Web3 and Blockchain technologies.",
    path: "https://www.uit.edu.vn/",
  },
  {
    company: "LearnWeb3",
    position: "Student",
    startAt: "Jun 2023",
    endAt: "Present",
    image: LearnWeb3,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non deleniti, perspiciatis sit error voluptatibus vero reiciendis debitis neque corrupti sapiente ipsa minus vel recusandae dolore inventore ex reprehenderit rem modi.",
    path: "https://learnweb3.io/u/0xharrynguyen",
  },
];

const Timeline = () => {
  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-5">
          {/* title */}
          <h2 className="title">Timeline</h2>
          {/* content */}
          <div className="flex h-[30rem] flex-col gap-4 overflow-y-scroll">
            {timelineData.map((item, index) => {
              return (
                <TimelineItem
                  key={index}
                  company={item.company}
                  position={item.position}
                  startAt={item.startAt}
                  endAt={item.endAt}
                  image={item.image}
                  description={item.description}
                  path={item.path}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
