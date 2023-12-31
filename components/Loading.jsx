import React from "react";

import SkeletonCard from "./SkeletonCard";

const Loading = () => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {"1231233123".split(" ").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
};

export default Loading;
