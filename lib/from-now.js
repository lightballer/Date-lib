'use strict';

const { currentDate } = require('./current-date');
const { parse } = require('./parse');
const { countDaysFromStart, countYears, LEAP_YEAR, STANDART_YEAR } =
require('./count');


const fromNow = date => {
  const inputDate = parse(date);
  const year = inputDate[0];
  const month = inputDate[1];
  const days = +inputDate[2];

  const currentYear = currentDate()['Y'];
  const currentMonth = currentDate()['M'];
  const currentDays = currentDate()['D'];

  let resultDays = 0;

  const daysFromStartYear = countDaysFromStart(days, month, year);
  const daysFromStartYearCurrent = countDaysFromStart(currentDays,
    currentMonth, currentYear);

  if (daysFromStartYearCurrent >= daysFromStartYear && currentYear >= year) {
    resultDays = daysFromStartYearCurrent - daysFromStartYear;
    return countYears(year, currentYear, resultDays);
  } else if (currentYear > year) {
    let daysToEndYear = 0;
    daysToEndYear = (year % 4 === 0 ? LEAP_YEAR : STANDART_YEAR) -
    daysFromStartYear;
    return daysFromStartYearCurrent + daysToEndYear +
    countYears(year + 1, currentYear, resultDays);
  } else {
    resultDays = daysFromStartYearCurrent - daysFromStartYear;
    return countYears(currentYear, year, resultDays * (-1)) * (-1);
  }
};

module.exports = { fromNow };
