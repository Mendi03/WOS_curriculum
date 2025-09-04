// 1 Print in Reverse: 40 to 10

function printReverse40to10() {
    for(let i = 40; i >= 10; i--){
        console.log(i);
    }
}

// printReverse40to10();

// 2 Print All Odd Numbers 1–21

function printOdds1to21() {
    for(let i = 1; i <= 21; i++){
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

// printOdds1to21();

// 3 Sum of Numbers 50–100

function sum50to100(){
    let sum = 0;
    for(let i = 50; i <= 100; i++){
        sum += i;
    }

    return sum;
}

// console.log(sum50to100());

// 4 Create Array from 5 to 15

function makeArray5to15(){
    let newArray = [];

    for(let i = 5; i <= 15; i++){
        newArray.push(i);
    }

    return newArray;
}

let five2fifteen = makeArray5to15();

// console.table(Array(five2fifteen));


// 5 Print All Items in This Array

function printItems(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

let small = [1,2,3,4,5];

// printItems(five2fifteen);
// printItems(small);

// 6 Print Index + Value for Each Item

function printIndexAndValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Index " + i + ": " + arr[i]);
  }
}

let pets = ["doge", "kat", "birb", "snek"];

// printIndexAndValue(small);
// printIndexAndValue(pets);

// 7 Count All Vowels in a String

let vowels = "aeiou";

function countVowels(str){
    let count = 0;

    let word = str.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])){
            count++;
        }
    }

    return count;
}

// console.log(countVowels("balakazam"));
// console.log(countVowels("BOO! Did I get you?"));

// 8 Triple All Even Numbers

function tripleEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            arr[i] *= 3;
        }
    }

    return arr;
}

let numList = [1,5,8,6,2];

// console.table(Array(tripleEvens(numList)));


// 9 Set All Negatives to 1

function setAllNegativesTo1(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            arr[i] = 1;
        }
    }

    return arr;
}

let negatives = [2,-124,-5342,0,5]

// console.table(Array(setAllNegativesTo1(negatives)));


// 10 Count Items Greater Than a Target

function countGreaterThan(arr, target){
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if (arr[i]> target) {
            count++;
        }
    }

    return count;
    
}

// console.log(countGreaterThan(negatives, -1));
// console.log(countGreaterThan(negatives, 0));


// 11 Find the Smallest Value in an Array

function findMin(arr){
    let smallest = arr[0];

    for(let i = 0; i < arr.length; i++){
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

// console.log(findMin(negatives));


// 12 Double the Value of All Odd Indexes

function doubleOddIndexes(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            arr[i] *= 2;
        }
    }

    return arr;
}

let oddTest = [1,2,3,4,5,6,7,8];
let oddTest2 = [1,2,3,4,5,6,7];

// console.table(Array(doubleOddIndexes(oddTest)));
// console.table(Array(doubleOddIndexes(oddTest2)));

// 13 Print All Even Indexed Items

function printEvenIndexedItems(arr) {
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            console.log(arr[i]);
        }
    }

}

let evenTest = [1,2,3,4,20];

// console.table(Array(evenTest));
// printEvenIndexedItems(evenTest) 

// 14 Check If All Values Are Positive

function allPositive(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] <= 0) {
            return false;
        }
    }

    return true;
}

let minus = [1,7,2,-6,8,32];
let minus2 = [1,-7,2,-6,8,32];
let pos = [1,7,2,6,8,32];

// console.log(allPositive(minus));
// console.log(allPositive(minus2));
// console.log(allPositive(pos));


// 15 Find How Many Times a Value Appears

function countOccurrences(arr, target){
    let counter = 0;

    for(let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            counter++;
        }
    }

    return counter;
}

let occur1 = [1,1,1,1,2];
let occur2 = [2,3,5,5,3];

// console.log(countOccurrences(occur1, 1));
// console.log(countOccurrences(occur1, 3));
// console.log(countOccurrences(occur1, 2));
// console.log(countOccurrences(occur2, 5));
// console.log(countOccurrences(occur2, 3));