function sayHello() {
  console.log("Hello, world!");
}

function getFavoriteColor() {
  return "black";
}

function makePizza(topping) {
  return "Here’s your pizza with " + topping + "!";
}

function add(x, y) {
  return x + y;
}

function greetUser(name) {
  return "Hello " + name + "!";
}

function gradeMessage(score) {
  if (score >= 90) {
    return "Great job!";
  } else if (score >= 70) {
    return "Nice effort!";
  } else {
    return "Keep trying!";
  }
}

function describePet(type, name) {
  return `My pet ${type} is named ${name} .`;
}

function double(n) {
  return n * 2;
}

sayHello();

console.log(getFavoriteColor());

console.log(makePizza("pepperoni") + "\n" + makePizza("mushrooms"));

console.log(add(1, 2));

console.log(greetUser("Salva"));

console.log(gradeMessage(70));

console.log(
  describePet("Dog", "Charlie") + "\n" + describePet("Cat", "Cabezon")
);

console.log(double(5));
