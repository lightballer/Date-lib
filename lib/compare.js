'use strict';

const { fromNow } = require('./from-now');

const isBefore = date => {
  if (fromNow(date) > 0) return true;
  else return false;
};

const isSame = date => {
  if (fromNow(date) === 0) return true;
  else return false;
};

const isAfter = date => {
  if (fromNow(date) < 0) return true;
  else return false;
};

module.exports = { isBefore, isSame, isAfter };
