'use strict';

const cd = require('./currentDate');

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
  const curYear = cd.currentDate['Y'];
  const curMonth = cd.currentDate['M'];
  const curDays = cd.currentDate['D'];
  const STANDART_YEAR = 365;
  const LEAP_YEAR = 366;
  let resultDays = 0;

  const countDaysFromStart = (days, month, year) => {
    let daysFromStartYear = 0;
    for (let i = 0; i < month - 1; i++) {
      daysFromStartYear += months[i];
    }
    if (year % 4 === 0 && month > 1) daysFromStartYear++;
    daysFromStartYear += days;
    return daysFromStartYear;
  };

  const daysFromStartYear = countDaysFromStart(days, month, year);
  const daysFromStartYearCur = countDaysFromStart(curDays, curMonth, curYear);

  const countYears = (year, curYear) => {
    for (let i = year; i < curYear; i++) {
      if (i % 4 === 0) resultDays += LEAP_YEAR;
      else resultDays += STANDART_YEAR;
    }
  };

  if (daysFromStartYearCur >= daysFromStartYear) {
    resultDays = daysFromStartYearCur - daysFromStartYear;
    countYears(year, curYear);
  } else if (daysFromStartYearCur < daysFromStartYear) {
    let daysToEndYear = 0;
    if (year % 4 === 0) daysToEndYear = LEAP_YEAR - daysFromStartYear;
    else daysToEndYear = STANDART_YEAR - daysFromStartYear;
    countYears(year + 1, curYear);
    resultDays += daysFromStartYearCur + daysToEndYear;
  }

  return resultDays;
};

module.exports = { fromNow };
