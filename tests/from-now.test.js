'use strict';

const { fromNow } = require('../date-lib');

module.exports = () => {
  console.log(fromNow('2016-6-2'));
  console.log(fromNow('2020/5/13'));
  console.log(fromNow('2001.8.19'));
};
