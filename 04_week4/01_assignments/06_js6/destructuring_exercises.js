// Exercise 1: Basic Object Destructuring
const book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: "Douglas Adams",
  year: 1979,
  genre: "Science Fiction"
};

// Task:
const {title, author} = book;

// Verify:
console.log(`Title: ${title}, Author: ${author}`);

// Exercise 2: Destructuring with Default Values

const userProfile = {
  username: "codergal",
  email: "codergal@example.com"
  // bio property is missing
};

// Task:
const {username, email, bio = "No bio available"} = userProfile;

// Verify:
console.log(`username: ${username}, email: ${email}, bio: ${bio}`);

// Exercise 3: Destructuring Nested Objects
const developer = {
  name: "Alice",
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    backend: ["Node.js", "Python"]
  },
  experience: 5
};

// Task:
const {name, skills: {frontend}} = developer;
// Verify:
console.log(`name: ${name}, frontend: ${frontend}`);

// Exercise 4: Destructuring in Function Parameters (Object)

// Task:

function printProductDetails({productName, price, stock}){
    console.log("Product details:");
    console.log(productName);
    console.log(price);
    console.log(stock);
}

const product = {
  productName: "Laptop",
  price: 1200,
  stock: 50
};
printProductDetails(product);

// Exercise 5: Basic Array Destructuring

const rgbColors = [255, 0, 128];

// Task:
const [red, green, blue] = rgbColors

// Verify:
console.log(`Red: ${red}`);
console.log(`green: ${green}`);
console.log(`blue: ${blue}`);

// Exercise 6: Skipping Elements in Array Destructuring

const data = ["apple", "banana", "cherry", "date"];

// task

const [first, ,third] = data;

// verify

console.log(`first: ${first}`);
console.log(`third: ${third}`);

// Exercise 7: Swapping Variables with Array Destructuring

let a = 10;
let b = 5;

// task
[a,b] = [b,a];

// verify
console.log(`a: ${a}`);
console.log(`b: ${b}`);

// Exercise 8: Combined Object and Array Destructuring
const restaurant = {
  name: "Taste of Italy",
  location: "123 Main St",
  menu: {
    appetizers: ["Garlic Bread", "Calamari"],
    mainCourses: ["Pasta Carbonara", "Pizza Margherita", "Steak"],
    desserts: ["Tiramisu", "Panna Cotta"]
  },
  rating: 4.5
};

// task
const {
    name: restaurantName, 
    menu: {
        mainCourses: [dish1, dish2]
    }
} = restaurant;

// verify

console.log(`restaurantName: ${restaurantName}, dish1: ${dish1}, dish2: ${dish2},`);


