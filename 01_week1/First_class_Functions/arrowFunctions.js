const hero = {
  name: "Izuku",
  sayName: () => console.log(this.name)
};

hero.sayName(); // undefined

// traditional:

function add1(num) {
  return num + 1;
}

// Function Expression
const add1Ex = function(num) {
  return num + 1;
};

// Converting to an Arrow Function

// Remove the function keyword and add an arrow
const add1Ex2 = (num) => {
  return num + 1;
};

// If one line, remove braces and return (implicit return)
const add1Ex3 = (num) => num + 1;

// If one parameter, remove parentheses:
const add1Ex4 = num => num + 1;

// Zero or multiple parameters: Parentheses required
const add = (x, y) => x + y;
const getAnswer = () => 42;
