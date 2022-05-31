let chalk = require("chalk");
let figlet = require("figlet");

console.log(chalk.red("I'm trying chalk"));
console.log(figlet.textSync("I'm trying figlet"));
console.log(chalk.blue(figlet.textSync("# WEB DEVELOPMENT")));