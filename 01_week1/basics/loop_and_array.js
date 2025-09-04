// 1. Print items in array

let colors = ["red", "green", "blue"];

for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);   
}

// 2. Print Each Item with Its Index

for(let i = 0; i < colors.length; i++){
    console.log("Index: " + i + ", Color: " + colors[i]);   
}

// 3. Count the Number of Even Numbers
let numbers = [2, 7, 4, 9, 12, 5];

let count = 0;

for(let i = 0; i < numbers.length; i++){
  	if((numbers[i] % 2) == 0){
      	count++;
    }
}

console.log("Amount of even number is: " + count); 

// 4. Add the points

let points = [10, 15, 20, 5];

let total = 0;

for(let i = 0; i < points.length; i++){
  	total += points[i];
}

console.log(total);

// 5. Print Only the Vowels

let letters = ["a", "b", "c", "e", "o", "x"];

let vowels = "aeiou";

for (let i = 0; i < letters.length; i++) {
    if (vowels.includes(letters[i])){
        console.log(letters[i]);
    }
}

// 6. Find the Longest Word
let words = ["apple", "banana", "cherry", "date"];

let longest = "";

for (let i = 0; i < words.length; i++) {
    if(words[i].length > longest.length){
        longest = words[i]
    }
}

console.log("Longest word in array: " + longest);

// 7. Reverse the Drawer

for (let i = words.length - 1; i >= 0; i--) {
    console.log(words[i]);
}

// 8. Print Items Longer Than 3 Letters
let pets = ["cat", "dog", "parrot", "fish"];

for (let i = 0; i < pets.length; i++) {
    if(pets[i].length > 3){
        console.log(pets[i]);
    }
}
