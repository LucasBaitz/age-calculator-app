import React from "react";

interface ResultProps {
  value?: number;
  name: string;
}

const Result: React.FC<ResultProps> = ({ name, value }) => {
  return (
    <div className="text-4xl md:text-6xl lg:text-8xl font-extrabold italic">
      <span className="app-text-purple font-extrabold italic">
        {value ? value : "--"}
      </span>
      <span className="text-black font-extrabold italic">{name}</span>
    </div>
  );
};

export default Result;
