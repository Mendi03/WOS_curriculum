// Clone an object and change one value

const game = {
    title: "Genshin Impact",
    year: 2020,
    price: 0
}

const gameClone = {...game, price: 25}

console.log(gameClone);

// Add a new property to an object using spread
const gameClone2 = {...gameClone, rating: 5}
console.log(gameClone2);

// Use a variable to add a dynamic key to an object
const new_key = "url";
const gameClone3 = {...gameClone2, [new_key]: "https://genshin.hoyoverse.com/en/"}

console.log(gameClone3);



