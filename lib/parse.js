'use strict';

const parse = date => {
  const splitted = date.split('');
  const separator = splitted.findIndex(e => isNaN(e));
  return date.split(date[separator]);
};

module.exports = { parse };
