'use strict';

const converterTest = require('./converter.test');
const formatTest = require('./format.test');
const fromNowTest = require('./from-now.test');

console.log('\nCONVERTER');
converterTest();

console.log('\nFORMAT');
formatTest();

console.log('\nFROM NOW');
fromNowTest();
