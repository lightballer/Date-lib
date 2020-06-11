'use strict';

const modules = [
  'converter',
  'format',
  'from-now',
  'compare',
].map(path => require('./lib/' + path));

module.exports = Object.assign({}, ...modules);
