import React from "react";

// components
import { Skeleton } from "./ui/skeleton";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";

const SkeletonCard = () => {
  return (
    <Card className="cursor-pointer flex w-full h-full flex-col transition-all duration-300 hover:border-ring">
      <CardHeader>
        <Skeleton className="text-xl xl:text-[30px] h-4 w-[360px] " />
        <Skeleton className="h-4 w-[240px]" />
      </CardHeader>
      <div className="flex flex-row space-x-4 text-sm text-muted-foreground p-6 pt-0">
        {/* languages */}
        <div className="flex items-center gap-1">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
        {/* time */}
        <Skeleton className="h-4 w-[150px] " />
      </div>
    </Card>
  );
};
export default SkeletonCard;
