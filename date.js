'use strict';

const modules = [
  'format',
  'fromnow',
  'converter'
].map(path => require('./lib/' + path));

module.exports = Object.assign({}, ...modules);
