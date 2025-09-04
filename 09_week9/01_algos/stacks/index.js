import { ArrayStack } from './classes/array-stack.js';

const seed = [68, 36, 50, 48, 34, 86, 16, 18, 15, 78, 1, 41];

const myArrayStack = new ArrayStack();

seed.forEach((num) => myArrayStack.push(num));

// myArrayStack.print();

console.log(myArrayStack.push(10).push(20).peek());

console.log(myArrayStack.toArray());


