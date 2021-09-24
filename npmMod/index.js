const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.green.underline.inverse("Hlo Guys"));

const res = validator.isEmail("amit@gmail.com");
console.log(res?chalk.green.underline.inverse(res): chalk.red.underline.inverse(res));