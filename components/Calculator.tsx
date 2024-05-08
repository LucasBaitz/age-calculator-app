"use client";
import React, { useState } from "react";
import DateInput from "./Input/DateInput/DateInput";
import Label from "./Input/Label/Label";
import Button from "./Input/Button/Button";
import Result from "./Result/Result";
import { Birthday } from "@/Interfaces/Birthday";
import { Age } from "@/Interfaces/Age";
import {
  calculateAge,
  isValidDay,
  isValidMonth,
  isValidYear,
} from "@/Utils/ageCalculator";

const REQUIRED_MESSAGE = "This field is required";
const VALID_DATE_MESSAGE = "Must be a valid date";

const Calculator: React.FC = () => {
  const [birthday, setBirthday] = useState<Birthday>({
    day: 0,
    month: 0,
    year: 0,
  });

  const [age, setAge] = useState<Age>({
    days: 0,
    months: 0,
    years: 0,
  });

  const [errors, setErrors] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleDateChange = (value: number, type: string) => {
    setBirthday((prevResult) => ({
      ...prevResult,
      [type.toLowerCase()]: value,
    }));
  };

  const handleCalculateAge = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    Object.entries(birthday).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = REQUIRED_MESSAGE;
      } else {
        switch (key.toLowerCase()) {
          case "day":
            newErrors[key] = !isValidDay(value) ? "" : VALID_DATE_MESSAGE;
            break;
          case "month":
            newErrors[key] = !isValidMonth(value) ? "" : VALID_DATE_MESSAGE;
            break;
          case "year":
            newErrors[key] = !isValidYear(value) ? "" : VALID_DATE_MESSAGE;
            break;
          default:
            break;
        }
      }
    });

    setErrors(newErrors as any);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setAge(calculateAge(birthday));
  };

  return (
    <form
      onSubmit={handleCalculateAge}
      className="bg-white rounded-xl rounded-br-[150px] shadow-2xl p-10 age-calculator max-w-[800px]"
    >
      <div className="flex flex-row gap-6 md:mr-32 m-0">
        <div className="flex flex-col gap-y-2">
          <Label title="DAY" error={errors.day} />
          <DateInput
            setChange={handleDateChange}
            placeholder="DD"
            range={{ start: 1, end: 31 }}
            type="Day"
            error={errors.day}
          />
          {errors.day && (
            <span className="text-red-500 italic text-sm">{errors.day}</span>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label title="MONTH" error={errors.month} />
          <DateInput
            setChange={handleDateChange}
            placeholder="MM"
            range={{ start: 1, end: 12 }}
            type="Month"
            error={errors.month}
          />
          {errors.month && (
            <span className="text-red-500 italic text-sm">{errors.month}</span>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label title="YEAR" error={errors.year} />
          <DateInput
            setChange={handleDateChange}
            placeholder="YYYY"
            range={{ start: 1800, end: new Date().getFullYear() }}
            type="Year"
            error={errors.year}
          />
          {errors.year && (
            <span className="text-red-500 italic text-sm">{errors.year}</span>
          )}
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row items-center my-10">
        <hr className="text-black w-full absolute top-1/2 transform -translate-y-1/2" />
        <div className="md:absolute md:right-0">
          <Button onClick={() => {}} />
        </div>
      </div>

      <div>
        <Result name="years" value={age.years} />
        <Result name="months" value={age.months} />
        <Result name="days" value={age.days} />
      </div>
    </form>
  );
};

export default Calculator;
