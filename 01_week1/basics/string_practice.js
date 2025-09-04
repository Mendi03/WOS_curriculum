//1. Letter by Letter
let word = "supercalifragilisticexpialidocious";

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

//2. 2. Count the Letter A
let phrase =
  "During our amazing Alaska adventure, Aaliyah and I saw a vast array of captivating animals.";

let count_A = 0;

for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] == "A" || phrase[i] == "a") {
    count_A++;
  }
}

console.log(`Amount of A's = ${count_A}`);

//3. Yell It!
let quietMessage = "look out behind you";
let loudMessge = quietMessage.toUpperCase() + "!";

console.log(loudMessge);

// 4, check for secret

let sentence1 = "It was a secret that only a select few were privy to.";
let sentence2 = "The hidden compartment contained valuable documents.";
let sentence3 =
  "Secret operations were carried out under the cover of darkness.";
let sentence4 =
  "The old woman quietly mumbled, 'Those cretins will never find my hidden treasure.'";

let quotes = [sentence1, sentence2, sentence3, sentence4];

for (let i = 0; i < quotes.length; i++) {
  let sentence = quotes[i].toLowerCase();

  if (sentence.includes("secret")) {
    console.log("Keyword found!");
  } else {
    console.log("Keyword missing.");
  }
}

// 5. shorten tweet!

let tweet1 = "Just enjoyed a fantastic coffee!";
let tweet2 = "Learning JavaScript is fun!";
let tweet3 =
  "The weather today is absolutely beautiful, perfect for a walk in the park.";
let tweet4 =
  "Excited to announce that our team has successfully launched the new project! It took a lot of hard work and dedication, and we're incredibly proud of what we've accomplished. More details coming soon, stay tuned for updates and behind-the-scenes content.";

let tweets = [tweet1, tweet2, tweet3, tweet4];

for (let i = 0; i < tweets.length; i++) {
  if (tweets[i].length <= 20) {
    console.log(tweets[i]);
  } else {
    let summary = tweets[i].slice(0, 17) + "...";
    console.log(summary);
  }
}

// 6. Sentence with Template Literal

let full_name = "Salvador";
let favoriteFood = "Burgers";
let numPets = 0;

console.log(
  `My name is ${full_name}. I love ${favoriteFood}. I have ${numPets} pets.`
);
