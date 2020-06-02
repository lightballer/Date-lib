'use strict';

const modules = [
  'format',
  'fromnow',
].map(path => require('./lib/' + path));

module.exports = Object.assign({}, ...modules);
