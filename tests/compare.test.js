'use strict';

const { isBefore, isSame, isAfter } = require('../date-lib');
const { currentDate } = require('../lib/current-date');

module.exports = () => {
  console.log(isBefore('2001/08/19'));
  const year = currentDate()['Y'];
  const month = currentDate()['M'];
  const day = currentDate()['D'];
  console.log(isSame(`${year}.${month}.${day}`));
  console.log(isAfter('2025:4:3'));
};
