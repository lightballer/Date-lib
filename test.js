'use strict';

const date = require('./date');

console.log(date.format('MM.DD.YYYY, h:mm:ss'));
console.log(date.fromNow([2016, 6, 2]));
console.log(date.fromNow([2020, 5, 13]));
console.log(date.fromNow([2001, 8, 19]));
const Converter = date.Converter;
const converter = new Converter('12.04.2020');
console.log(converter.from('DD.MM.YYYY').to('MM/DD/YYYY'));
