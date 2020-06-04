'use strict';

const currentDate = require('./current-date');

const format = date => {
  const result = [];
  const used = [];
  for (let i = 0; i < date.length; i++) {
    const keys = Object.keys(currentDate);
    const character = date[i];
    if (!used.includes(character)) {
      keys.map(key => {
        if (character === key) {
          result.push(currentDate[key]);
          used.push(character);
        }
      });
      if (!keys.includes(character)) result.push(character);
    } else {
      continue;
    }
  }
  return result.join('');
};

module.exports = { format };
