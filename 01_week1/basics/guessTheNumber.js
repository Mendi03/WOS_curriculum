const readline = require('node:readline/promises');

const generateRandomNumber = () => Math.floor((Math.random() * 100) + 1);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function guessTheNumber(){
    let rnNum = generateRandomNumber();

    console.log("Welcome to the guessing game!");

    let correctGuess = false;

    do{
        const guess = await rl.question("Guess a number between 1 and 100: ");

        if (guess > rnNum) {
            console.log("Too high, try again.");
        }
        else if (guess < rnNum) {
            console.log("Too low, try again.");
        }
        else{
            console.log("Congratulations! You guessed the number correctly.");
            correctGuess = true;
            rl.close();
        }
    }while (!correctGuess)
    
}

guessTheNumber();