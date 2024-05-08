import React from "react";

interface LabelProps {
  title: string;
  error: string
}

const Label: React.FC<LabelProps> = ({ title, error }) => {
  return <label className={`font-bold text-sm tracking-widest ${error ? "text-red-500" : "text-gray-600"}`}>{title}</label>;
};

export default Label;
