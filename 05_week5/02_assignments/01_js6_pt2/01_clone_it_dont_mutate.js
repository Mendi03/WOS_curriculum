//1
const fruits = ["apple", "banana"];
// Add "cherry" to the end (without using .push)
const up_fruits = [...fruits, "cherry"];

console.log(up_fruits);

// 2
const queue = ["first", "second", "third"];
// Remove "first" (without using .shift)
const new_queue = queue.slice(1);
console.log(new_queue);

// 3. 
const user = { name: "Ada", loggedIn: false };
// Change loggedIn to true (without mutation)
const up_user = {...user, loggedIn: true};

console.log(up_user);


// 4. 
const product = { id: 123, name: "Mug" };
// Add a new property: inStock: true
const up_product = {...product, inStock: true};

console.log(up_product);

// 5. BONUS: Use a dynamic key
const key = "category";
const value = "kitchen";
// Add this key-value pair to the product object above
const final_product = {...up_product, [key]: value}
console.log(final_product);
