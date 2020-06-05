'use strict';

const { format, Converter } = require('./date-lib');

const now = format('YYYY-MM-DD'); // Canadian format

const converter = new Converter(now);
const date = converter.from('YYYY-MM-DD').to('DD.MM.YYYY'); // Russian format

console.log(date); // 5.6.2020
