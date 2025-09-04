const fs = require('fs'); 
const os = require('os');
const readline = require('node:readline/promises');

fs.writeFileSync('example.txt', 'Hello from Node!'); 
console.log('File created!');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function ask() {
  const name = await rl.question("What's your name? ");
  console.log(`Nice to meet you, ${name}!`);
  rl.close();
}

ask();