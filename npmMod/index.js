const chalk = require('chalk');
const validator = require('validator');

//console.log(chalk.green.italic.underline.inverse('Hello World!'));
const res=validator.isEmail('nisha@nisha.com');
console.log(res?chalk.green.inverse(res):chalk.blue.inverse(res));