const orders = [
  { id: 1, toppings: ["mushroom", "cheese"], size: "large", isDelivered: false },
  { id: 2, toppings: ["pineapple", "sausage", "veggie"], size: "small", isDelivered: true },
  { id: 3, toppings: ["cheese", "veggie", "olive"], size: "small", isDelivered: false },
  { id: 4, toppings: ["onion"], size: "medium", isDelivered: false },
  { id: 5, toppings: ["cheese", "pineapple", "olive"], size: "medium", isDelivered: false },
  { id: 6, toppings: ["pepperoni", "sausage", "pineapple"], size: "large", isDelivered: false },
  { id: 7, toppings: ["cheese"], size: "large", isDelivered: true },
  { id: 8, toppings: ["bacon", "pepperoni", "olive"], size: "small", isDelivered: false },
  { id: 9, toppings: ["pepperoni"], size: "small", isDelivered: true },
  { id: 10, toppings: ["olive", "veggie"], size: "medium", isDelivered: true },
  { id: 11, toppings: ["bacon", "onion", "olive"], size: "medium", isDelivered: false },
  { id: 12, toppings: ["green pepper"], size: "medium", isDelivered: true },
  { id: 13, toppings: ["veggie", "cheese", "onion"], size: "large", isDelivered: false },
  { id: 14, toppings: ["mushroom", "onion", "sausage"], size: "large", isDelivered: true },
  { id: 15, toppings: ["pineapple", "green pepper", "sausage"], size: "large", isDelivered: false },
  { id: 16, toppings: ["sausage", "pineapple", "mushroom"], size: "large", isDelivered: false },
  { id: 17, toppings: ["green pepper", "pepperoni"], size: "medium", isDelivered: false },
  { id: 18, toppings: ["green pepper"], size: "medium", isDelivered: true },
  { id: 19, toppings: ["pepperoni", "mushroom", "cheese"], size: "medium", isDelivered: false },
  { id: 20, toppings: ["olive", "green pepper", "onion"], size: "large", isDelivered: true }
];

// 1. Get Undelivered Orders
// Return an array of all orders where isDelivered is false.

// const undeliveredOrders = orders.filter((order) => {
//     if(order.isDelivered) return order;
// })

// const undeliveredOrders = orders.filter(order => order.isDelivered === false);
const undeliveredOrders = orders.filter(order => !order.isDelivered);
console.log("Undelivered Orders:");
console.log(undeliveredOrders);

// 2. List All Toppings
// Return a single array of all toppings, including duplicates.

// const allToppings = orders.map(order => order.toppings);
// Got some help from Jason on how to use map here

const allToppings = orders.map(({toppings})=>toppings).flat(Infinity);

console.log("All toppings:");
console.log(allToppings);
// Hint: Use .map() to get toppings arrays, then .flat().

// 3. IDs of Large Pizzas
// Return an array of IDs where the size is "large".
const largePizzas = orders.filter(({size}) => size == "large").map(({id}) => id);
console.log("Large Pizzas ID:");
console.log(largePizzas);

// 4. Undelivered Pizza Sizes
// Return an array of the sizes of pizzas that haven’t been delivered.
const undeliveredPizzaSizes = orders.filter(order => !order.isDelivered).map(({size}) => size);
console.log("Undelivered Pizza Sizes:");
console.log(undeliveredPizzaSizes);

// 5. Filter Orders That Include Pepperoni
// Return all orders that include "pepperoni" in the toppings array.
const pepperoniPizzas = orders.filter(({toppings}) => toppings.includes("pepperoni"));
console.log("Pepperoni orders:");
console.log(pepperoniPizzas);

// 6. Count the Number of Medium Pizzas
// Return the total number of pizzas with size "medium".
const totalMedPizzas = orders.filter(({size}) => size == "medium").length;
console.log("Number of Medium Pizzas:");
console.log(totalMedPizzas);

// 7. Get a List of Unique Toppings
// Return an array of all toppings without duplicates.
const uniqueToppings = new Set(orders.map(({toppings})=>toppings).flat(Infinity));
console.log("List of Unique Toppings:");
console.log(uniqueToppings);

// Hint: Use .flat() and new Set().

// 8. Toppings of Delivered Large Pizzas
// Return only the toppings arrays of pizzas that are both "large" and delivered.
const toppingsOfDLP = orders.filter(({size, isDelivered}) => size === "large" && isDelivered).map(({toppings}) => toppings);
console.log("Toppings of Delivered Large Pizzas:");
console.log(toppingsOfDLP);


// 9. Generate a Summary of Each Order
// Return a new array where each item looks like:
// { id: 1, summary: "large pizza with mushroom, cheese (not delivered)" }

// const summarized = orders.map((order) => {
//     return {
//         id: order.id, 
//         summary: `${order.size} pizza with ${order.toppings.join(", ")} (${order.isDelivered ? "delivered" : "not delivered"})`
//     }
// });
const summarized = orders.map(order => {
    return {
        id: order.id, 
        summary: `${order.size} pizza with ${order.toppings.join(", ")} (${order.isDelivered ? "delivered" : "not delivered"})`
    }
});
console.log("Summary of Each Order:");
console.log(summarized);

// 10. BONUS: Most Common Topping
// Return the topping that appears most frequently across all orders.
// Discussed with Jason how to make this solution in one line

const pizzaToppings = orders
.map(({toppings})=>toppings)
.flat(Infinity)
.reduce((toppingsList, topping) =>{
    toppingsList[topping] = (toppingsList[topping] || 0) + 1;
    return toppingsList;
}, {});

function findCommonTopping(pizzaToppings){
    let mostCommonTopping = null;
    let toppingCount = 0;
    for(const topping in pizzaToppings){
        if(pizzaToppings[topping] > toppingCount){
            mostCommonTopping = topping;
            toppingCount = pizzaToppings[topping]
        }
    }
    return mostCommonTopping;
}

console.log("List of toppings and count:");
console.log(pizzaToppings);


console.log("Most Common Topping:");
console.log(findCommonTopping(pizzaToppings));

// could have also used 2D arrays for the bonus problem
