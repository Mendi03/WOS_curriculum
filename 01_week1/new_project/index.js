import readline from 'node:readline/promises';
import {stdin as input, stdout} from 'node:process';
import chalk from "chalk"; // ES Module import syntax
// Common JS Syntax: const chalk = require("chalk")

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));


const rl = readline.createInterface({
    input,
    output: stdout,
});

let answer;

do {
  const reply = await rl.question('What is your name? ');
  console.log(`Hello, ${reply}!`);

  answer = await rl.question('Would you like to change your name? (Y/n):');
  if (answer !== undefined || answer !== null) {
    answer = answer.toLowerCase();
  }
} while (answer === 'y');

rl.close();

