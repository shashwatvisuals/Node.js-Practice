// const chalk = require("chalk");
import validator from "validator"
import chalk from "chalk";
const res =   validator.isEmail("hwsedrgyund@gmail.com")
console.log(chalk.bgRed.black("failed"))
console.log(chalk.bgGreen.black("success"));
console.log(res? chalk.bgGreen.black(res):chalk.bgRed.black(res))
