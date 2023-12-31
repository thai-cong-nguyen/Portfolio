import React from "react";

// components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import Image from "next/image";

const TimelineItem = ({
  company,
  position,
  startAt,
  endAt,
  image,
  description,
  path,
  ...props
}) => {
  return (
    <a target="_blank" href={path}>
      <div className="flex flex-row gap-4 cursor-pointer">
        {/* time */}
        <div className="flex w-max shrink-0 flex-col font-mono text-sm text-muted-foreground">
          <span>{endAt}</span>
          <span>{startAt}</span>
        </div>
        {/* broken line */}
        <div className="flex flex-col items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-muted-foreground" />
          <span className="w-[2px] grow bg-transparent bg-gradient-to-b from-muted-foreground from-50% to-0% bg-[length:2px_12px] bg-repeat-y" />
        </div>
        {/* content */}
        <div className="group flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image src={image} alt="" width={20} height={20} />
            <span className="font-medium">{company}</span>
            <span> • </span>
            <span className="font-medium text-muted-foreground transition-all duration-300 group-hover:text-accent-foreground">
              {position}
            </span>
          </div>
          <div className="max-w-2xl text-sm text-muted-foreground">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default TimelineItem;
