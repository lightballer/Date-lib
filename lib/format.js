'use strict';

const cd = require('./currentDate');

const format = date => {
  const result = [];
  const used = [];
  for (let i = 0; i < date.length; i++) {
    const keys = Object.keys(cd.currentDate);
    const char = date[i];
    if (!used.includes(char)) {
      keys.map(key => {
        if (char === key) {
          result.push(cd.currentDate[key]);
          used.push(char);
        }
      });
      if (!keys.includes(char)) result.push(char);
    } else {
      continue;
    }
  }
  return result.join('');
};

module.exports = { format };
