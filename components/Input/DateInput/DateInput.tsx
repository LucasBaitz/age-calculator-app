import React from "react";

interface DateInputProps {
  type: string;
  range: { start: number; end: number };
  placeholder: string;
  setChange: (value: number, type: string) => void;
  error: string;
}

const DateInput: React.FC<DateInputProps> = ({
  type,
  placeholder,
  range,
  setChange,
  error,
}) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue, 10);

    if (!isNaN(numericValue)) {
      setChange(numericValue, type);
    }
  };

  return (
    <input
      onChange={handleChange}
      placeholder={placeholder}
      className={`rounded-xl hover:outline-purple-500 focus:outline-purple-500 cursor-pointer p-3 py-5 text-xl font-bold w-full outline outline-[1.5px] ${error ? "outline-red-500" : "outline-gray-300"} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
      type="number"
      
    />
  );
};

export default DateInput;
