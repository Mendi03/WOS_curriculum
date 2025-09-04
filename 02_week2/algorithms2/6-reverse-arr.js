/*
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
const expectedA = [3, 2, 1];

const arr2 = ['a', 'b'];
const expectedB = ['b', 'a'];

const arr3 = ['a'];
const expectedC = ['a'];

const arr4 = [];
const expectedD = [];

/**
 * Reverses the given arr in place without built in methods.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
function reverseArr(items) {
  // code here
  let arrayLength = items.length - 1;
  for (let i = arrayLength; i >= items.length / 2; i--) {
    let temp = items[i]; // Stores value into a temporary variable
    items[i] = items[arrayLength - i];
    items[arrayLength - i] = temp; // Swaps the values whose indeces are equidistant from the middle
  }
  return items;
}

// Tests
const resultA = reverseArr(arr1);
console.log(resultA, 'should be', expectedA);

const resultB = reverseArr(arr2);
console.log(resultB, 'should be', expectedB);

const resultC = reverseArr(arr3);
console.log(resultC, 'should be', expectedC);

const resultD = reverseArr(arr4);
console.log(resultD, 'should be', expectedD);