const person = {
    name: "Sal",
    age: 23,
    has_hair: true
}

let {name, has_hair} = person;

console.log(name);
console.log(has_hair);


// 2 Write a function that accepts an object and uses destructuring in the parameter list.

function greet({ age }) {
  console.log("You are " + age);
}

greet(person);

// 3 Create an array and use array destructuring to grab the first two values.

const list1 = [1,5,8,3];

const [first, second] = list1;

console.log(first + " " + second);
