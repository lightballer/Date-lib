'use strict';

const { format } = require('../date-lib');

module.exports = () => {
  console.log(format('MM.DD.YYYY, h:mm:ss'));
};
