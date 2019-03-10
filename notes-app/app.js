const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const notes = getNotes()

console.log(notes)

console.log(validator.isEmail('andre@example.com'))

console.log(chalk.blue.bold('Hello world!'));


// const add = require('./utils.js');
// const sum = add(4, -2)
// console.log(sum);