'use strict';

const modules = [
  'format',
].map(path => require('./lib/' + path));

module.exports = Object.assign({}, ...modules);
