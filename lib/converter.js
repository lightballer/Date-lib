'use strict';

const { currentDate } = require('./current-date');

const parse = date => {
  const splitted = date.split('');
  const separator = splitted.findIndex(e => isNaN(e));
  return date.split(date[separator]);
};

class Converter {

  constructor(date) {
    this.date = date;
    this.inputFormat = [];
  }

  from(format) {
    format = format.split('');
    const used = [];
    for (let i = 0; i < format.length; i++) {
      const character = format[i];
      if (!used.includes(character) && Object.keys(currentDate())
        .includes(character)) {
        this.inputFormat.push(character);
        used.push(character);
      }
    }
    return this;
  }

  to(format) {
    const values = parse(this.date);
    const used = [];
    const result = [];
    for (let i = 0; i < format.length; i++) {
      const character = format[i];
      const keys = this.inputFormat;
      if (!used.includes(character)) {
        result.push(values[keys.indexOf(character)]);
        used.push(character);
      }
      if (!keys.includes(character)) result.push(character);
    }
    return result.join('');
  }

}

module.exports = { Converter, parse };
