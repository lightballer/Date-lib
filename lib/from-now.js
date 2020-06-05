'use strict';

const { currentDate } = require('./current-date');

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

const fromNow = date => {
  const year = date[0];
  const month = date[1];
  const days = date[2];

  const currentYear = currentDate['Y'];
  const currentMonth = currentDate['M'];
  const currentDays = currentDate['D'];

  let resultDays = 0;

  const countYears = (year, currentYear) => {
    for (let i = year; i < currentYear; i++) {
      resultDays += (i % 4 === 0 ? LEAP_YEAR : STANDART_YEAR);
    }
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

  const daysFromStartYear = countDaysFromStart(days, month, year);
  const daysFromStartYearCurrent = countDaysFromStart(currentDays,
    currentMonth, currentYear);

  if (daysFromStartYearCurrent >= daysFromStartYear) {
    resultDays = daysFromStartYearCurrent - daysFromStartYear;
    countYears(year, currentYear);
  } else {
    let daysToEndYear = 0;
    daysToEndYear = (year % 4 === 0 ? LEAP_YEAR : STANDART_YEAR) -
      daysFromStartYear;
    countYears(year + 1, currentYear);
    resultDays += daysFromStartYearCurrent + daysToEndYear;
  }

  return resultDays;
};

module.exports = { fromNow };
