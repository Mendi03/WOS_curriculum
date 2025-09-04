const coinTossForHeads = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randNum = Math.random();
      if (randNum < 0.5) {
        resolve("Success! Heads was tossed.");
      } else {
        reject("Error! Tails was tossed.");
      }
    }, 2000);
  });
};

coinTossForHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//   What’s Happening:

// coinTossForHeads returns a Promise
// setTimeout() simulates a delay
// Math.random() simulates the toss
// resolve if heads, reject if tails
// .then() and .catch() handle the result

try {
  coinTossForHeads();
  console.log("Nice");
} catch (error) {
  console.log("Booo");
}

const waitAndGreet = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(name.length > 1){
                resolve("Hello, " + name + "!");
            } else{
                reject("What are you?");
            }
        }, 1000);
    });
};

waitAndGreet("Sal")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

waitAndGreet("")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

