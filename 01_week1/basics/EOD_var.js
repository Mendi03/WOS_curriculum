let name = "Leon";
let age = 32;
let isStudent = true;
let backpack;
let notebook = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof backpack);
console.log(typeof notebook);

age = "123";

console.log(typeof age); // turns into String

// 2

let a = 7;
let b = 12;

if(a > b){
    console.log('A is greater than B');
    
}else if(a == b){
    console.log('A equals B');
    
}else{
    console.log('A is less than B');
    
}

// 3. Movie night

let person_age = 15;
if(person_age >= 17){
    console.log('Can watch up to Restricted movies');
}
else if(person_age >= 13){
    console.log('Can watch up to PG-13 movies');
}
else if(person_age < 5){
    console.log('Too young for movies!');
}else{
    console.log('Can only watch kids movies');
}

// 4. Traffic Light Logic

let light = "red";

if (light == "red") {
    console.log('Stop!');
}
else if (light == "green") {
    console.log('Go!');
}
else if (light == "yellow") {
    console.log('Slow down!');
}
else{
    console.log('Dance!');
}

// 5. Boolean practice

let isRaining = false;
let hasUmbrella = true;

if(!isRaining || !hasUmbrella){
    console.log('Will get wet!');
}

if((!isRaining && hasUmbrella) || (!hasUmbrella && isRaining)){
    console.log('Wont get wet!');
}
