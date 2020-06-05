'use strict';

const now = new Date();

const currentDate = {
  Y: now.getFullYear(),
  D: now.getDate(),
  M: now.getMonth() + 1,
  h: now.getHours(),
  m: now.getMinutes(),
  s: now.getSeconds(),
};

module.exports = { currentDate };
