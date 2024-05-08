import { Age } from "../Interfaces/Age";
import { Birthday } from "../Interfaces/Birthday";

export const birthdayRanges = {
  day: { start: 1, end: 31 },
  month: { start: 1, end: 12 },
  year: { start: 1800, end: new Date().getFullYear() },
};

export const calculateAge = (date: Birthday): Age => {
  const todayDate = new Date();
  const birthDate = new Date(date.year, date.month - 1, date.day);
  let ageYears = todayDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = todayDate.getMonth() - birthDate.getMonth();
  let ageDays = todayDate.getDate() - birthDate.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }
  if (ageDays < 0) {
    ageDays += new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      0
    ).getDate();
  }

  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays,
  };
};

export const isValidDay = (day: number) => {
  return day < birthdayRanges.day.start || day > birthdayRanges.day.end;
};

export const isValidMonth = (month: number) => {
  return month < birthdayRanges.month.start || month > birthdayRanges.month.end;
};

export const isValidYear = (year: number) => {
  return year < birthdayRanges.year.start || year > birthdayRanges.year.end;
};
