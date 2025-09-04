/* 
    functions

    reusable block of vode

*/

function greet(){
    console.log('Hello world!');
}

greet();

// when declaring functions, inputs are parameters

function greet2(name){
    console.log(`Hello, ${name}` );
    console.log("Hello, " + name );
}

// When invoking functions, inputs are arguments

greet2("Lancelot");

function greet3(name, timeOfDay){
    console.log(`Good ${timeOfDay}, ${name}!`);
    
}

function add(num1, num2){
    return num1 + num2;
}

console.log(add(2,3));

let result = add(2,3);

