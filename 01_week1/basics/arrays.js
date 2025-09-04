/*
    Arrays in JS

*/

let colors = ["red", "blue", "yellow","green", "purple"];
console.log(typeof colors);

// get values

console.log(colors[3]);

// set values

colors[1] = "pink";
console.log(colors);

colors[10] = "white";
console.log(colors);

for(let i = 0; i < 12; i++){
    console.log('Hello');
    
}

/*

    4 component of a for loop

    1. Minion
    2. Starting value of our minion
    3. When the minion stops
    4. How the minion changes

    while loops

    (deconstructed for loop?)


*/

let i = 0;

while (i < 12) {
    console.log('Hello');
    i++;
}

j = 1;

// do while loops run at least once

do{

    console.log(j);
    j++;
    
} while (false);

// for .. of loop

let colors = ["red", "blue", "yellow","green", "purple"];

for (let color of colors) {
    console.log(color);
    
}

//end of arrays
