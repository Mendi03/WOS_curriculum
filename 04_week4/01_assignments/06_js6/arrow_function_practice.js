/*
Instructions
Rewrite each of the following functions as arrow functions
Use implicit return when possible
Remove parentheses only when there’s one parameter
Use braces and return for multi-line function bodies
*/

// 1.
// function greet(name) {
//   return "Hello, " + name + "!";
// }
const greet = name => "Hello, " + name + "!";
console.log(greet("Sal"));

// 2.
// function add(x, y) {
//   return x + y;
// }
const add = (x,y) => x + y;
console.log(add(4,-10));

// 3.
// function getAnswer() {
//   return 42;
// }
const getAnswer = () => 42;
console.log(getAnswer());


// 4.
// function squareAndAddTen(n) {
//   const square = n * n;
//   return square + 10;
// }
const squareAndAddTen = n => {
    const square = n * n;
    return square + 10;
}

console.log(squareAndAddTen(5));

// 5.
// function isEven(n) {
//   return n % 2 === 0;
// }
const isEven = n => n % 2 === 0;

console.log(isEven(4));
console.log(isEven(5));

// 6.
// function describeColor(color) {
//   const upper = color.toUpperCase();
//   const length = color.length;
//   return `${upper} has ${length} letters.`;
// }
const describeColor = color => {
    const upper = color.toUpperCase();
    const length = color.length;
    return `${upper} has ${length} letters.`;
}

console.log(describeColor("Red"));


// 7. (Bonus)
// function makeGreeter(greeting) {
//   return function(name) {
//     return greeting + ", " + name + "!";
//   };
// }

const makeGreeter = greeting => name => greeting + ", " + name + "!";

console.log(makeGreeter("Bye")("Salvador"));
