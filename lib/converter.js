'use strict';

const cd = require('./currentDate');

class Converter {
  constructor(date) {
    this.date = date;
    this.inputFormat = [];
  }
  from(format) {
    format = format.split('');
    const used = [];
    for (let i = 0; i < format.length; i++) {
      const char = format[i];
      if (!used.includes(char) && Object.keys(cd.currentDate).includes(char)) {
        this.inputFormat.push(char);
        used.push(char);
      }
    }
    return this;
  }

  to(format) {
    const splitted = this.date.split('');
    const separator = [splitted.findIndex(e => isNaN(e))];
    const values = this.date.split(this.date[separator]);
    const used = [];
    const result = [];
    for (let i = 0; i < format.length; i++) {
      const char = format[i];
      const keys = this.inputFormat;
      if (!used.includes(char)) {
        result.push(values[keys.indexOf(char)]);
        used.push(char);
      }
      if (!keys.includes(char)) result.push(char);
    }
    return result.join('');
  }
}

module.exports = { Converter };
