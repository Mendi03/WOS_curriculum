// conditional Statements

/*
    if, else if, else

*/

// == is loose, === is strict(checks for type)

let isSweltering = true;
let isMelting = true;

if (isSweltering === true) {
  console.log("Don't wear a parka, fool");
} else if (isMelting) {
  console.log("drink plenty of water");
} else {
  console.log("be comfy");
}

/* 
    fizzbuzz
    1 - 100
    if number divisible by 3 = fizz
    if number divisible by 5 = buzz
    if number divisible by both = fizzbuzz
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
