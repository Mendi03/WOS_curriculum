function greet() {
  console.log("Hello!");
}

const sayHello = greet;

sayHello(); // Hello!

function thank() {
  console.log("Thanks for learning with us.");
}

let expressGratitude = thank;
expressGratitude();

// example 3

function one() { console.log("One!"); }
function two() { console.log("Two!"); }

const actions = [one, two];

for (const action of actions) {
  action(); // Calls each function in the array
}

// ex 4

function shout(fn) {
  console.log("AND NOW...");
  fn();
  console.log("Thank you, thank you.");
}

function cheer() {
  console.log("Wooohooo!");
}

shout(cheer);

function surprise(){
  console.log("Surprise!");
}

let gift = surprise;

gift();



