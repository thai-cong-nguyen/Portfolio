import React from "react";

// components
import Title from "@/components/Title";
import WritingsList from "@/components/writings/WritingsList";

const Writings = () => {
  return (
    <main>
      <div className="container mx-auto mt-10">
        <Title content="Writings" />
        <WritingsList />
      </div>
    </main>
  );
};

export default Writings;
