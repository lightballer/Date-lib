'use strict';

const currentDate = {
  Y: new Date().getFullYear(),
  D: new Date().getDate(),
  M: new Date().getMonth() + 1,
  h: new Date().getHours(),
  m: new Date().getMinutes(),
  s: new Date().getSeconds(),
};

const format = date => {
  const result = [];
  const used = [];
  for (let i = 0; i < date.length; i++) {
    if (!used.includes(date[i])) {
      Object.keys(currentDate).map(key => {
        if (date[i] === key) {
          result.push(currentDate[key]);
          used.push(date[i]);
        }
      });
      if (!Object.keys(currentDate).includes(date[i])) result.push(date[i]);
    } else {
      continue;
    }
  }
  return result.join('');
};

module.exports = { format };
