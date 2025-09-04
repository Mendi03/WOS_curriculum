/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
  Do not assume a square array, the array may be "jagged".
*/

const arr2d1 = [
  [1, 2, 3], // arr2d[0][0] = 1, arr2d[0][1] = 2
  [4, 5, 6],
  [7, 8, 9],
];
const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr2d2 = [[1], [2], [3]];
const expected2 = [1, 2, 3];

const arr2d3 = [[], [], [10, 20]];
const expected3 = [10, 20];

/**
 * Flattens a two dimensional array into a new one dimensional array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<any>>} arr2d An array of arrays of any data type.
 * @returns {Array<any>} The flattened array that should be one dimensional.
 */
function flatten2dArray(arr2d) {
  // code here
  let temp = [];

  for(let i = 0; i < arr2d.length; i++){
    let innerArray = arr2d[i];

    for(let j = 0; j < innerArray.length; j++){
      temp[temp.length] = innerArray[j];
    }
  }
  return temp;
}

console.log(flatten2dArray(arr2d1), ' should be ', expected1);
console.log(flatten2dArray(arr2d2), ' should be ', expected2);
console.log(flatten2dArray(arr2d3), ' should be ', expected3);
