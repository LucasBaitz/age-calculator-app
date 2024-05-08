import React from "react";
import Image from "next/image";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className="rounded-full relative p-4 overflow-hidden transition-colors duration-200 bg-black hover:bg-violet-500 z-10"
      onClick={onClick}
    >
      <Image
        src="/assets/images/icon-arrow.svg"
        alt="Submit arrow"
        width={50}
        height={50}
      />
    </button>
  );
};

export default Button;
