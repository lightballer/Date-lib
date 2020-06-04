'use strict';

const { Converter } = require('../date-lib');

module.exports = () => {
  const converter = new Converter('12.04.2020');
  console.log(converter.from('DD.MM.YYYY').to('MM/DD/YYYY'));
};
