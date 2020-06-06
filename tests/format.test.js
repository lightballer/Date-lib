'use strict';

const { format } = require('../date-lib');

module.exports = () => {
  console.log(format('MM.DD.YYYY, h:mm:ss'));
  setTimeout(() => console.log(format('MM.DD.YYYY, h:mm:ss')), 3000);
};
