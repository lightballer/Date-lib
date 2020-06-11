'use strict';

const STANDART_YEAR = 365;
const LEAP_YEAR = 366;

const months = [
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

const countYears = (year, currentYear, resultDays) => {
  for (let i = year; i < currentYear; i++) {
    resultDays += (i % 4 === 0 ? LEAP_YEAR : STANDART_YEAR);
  }
  return resultDays;
};

const countDaysFromStart = (days, month, year) => {
  let result = 0;
  for (let i = 0; i < month - 1; i++) {
    result += months[i];
  }
  if (year % 4 === 0 && month > 1) result++;
  result += days;
  return result;
};

module.exports = { countYears, countDaysFromStart, LEAP_YEAR, STANDART_YEAR };
