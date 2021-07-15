//console.log('I am currently in app')
const validator = require('validator')
const chalk = require('chalk')

const name = require('./utils.js')
console.log(name())

console.log(validator.isEmail('nir8083@gmail.com'))
console.log(validator.isURL('wwgleom'))

console.log(chalk.red.bold('Error!'))

const rup = chalk.green.bold('Success!')

console.log(rup)

console.log(process.argv)

//console.log('File imported successfully now we are in app')