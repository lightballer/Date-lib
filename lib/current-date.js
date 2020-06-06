'use strict';

const currentDate = () => {
  const now = new Date();
  return {
    Y: now.getFullYear(),
    D: now.getDate(),
    M: now.getMonth() + 1,
    h: now.getHours(),
    m: now.getMinutes(),
    s: now.getSeconds(),
  };
};

module.exports = { currentDate };
