# Date-Lib
Library for simplify working with dates: convert to different formats, count days from any time to today.
## Usage
Import library:
```
const date = require('date-lib');
```
Current date in users format:
```
date.format('MM.DD.YYYY, h:mm:ss'); // return current date '5.6.2020, 02:37:40'
```
Count days from some day to today:
```
date.fromNow('2016-6-2'); // 1581
```
Convert date from one format to another:
```
const day = '12-04-2020'
const Converter = date.Converter;
const converter = new Converter(day);
converter.from('DD-MM-YYYY').to('MM/DD/YYYY'); // return '04/12/2020'
```
## Contributing
To contribute in my project you should fork it to your account, make changes and send a pull request where you need to describe what changes you make and why it’s important. Feel free to contact me and discuss your contributing.