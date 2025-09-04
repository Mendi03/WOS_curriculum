// Use .map() to:
// Add 1 to every number in [5, 6, 7]
// Convert ["cat", "dog", "bird"] into uppercase strings

const nums = [5, 6, 7];
const plus1 = nums.map(number => number + 1);
console.log(plus1);

const pets = ["cat", "dog", "bird"]; 
const PETS = pets.map(pet => pet.toUpperCase());
console.log(PETS);


// Use .filter() to:
// Keep only numbers greater than 10
// Remove "apple" from ["banana", "apple", "kiwi"]

const list = [10,20,2,6,30];
const bigNums = list.filter(num => num > 10);
console.log(bigNums);

const fruits = ["banana", "apple", "kiwi"];
const segregatedFruits = fruits.filter(fruit => fruit !== "apple")
console.log(segregatedFruits);

