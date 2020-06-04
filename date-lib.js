'use strict';

const modules = [
  'converter',
  'format',
  'from-now',
].map(path => require('./lib/' + path));

module.exports = Object.assign({}, ...modules);
