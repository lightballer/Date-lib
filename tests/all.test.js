'use strict';

const converterTest = require('./converter.test');
const formatTest = require('./format.test');
const fromNowTest = require('./from-now.test');
const compareTest = require('./compare.test');

console.log('\nCONVERTER');
converterTest();

console.log('\nFROM NOW');
fromNowTest();

console.log('\nCOMPARE');
compareTest();

console.log('\nFORMAT');
formatTest();
