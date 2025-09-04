import { partition } from './5-partition.mjs';

/* 
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

  Create a function that uses the partition function from yesterday to fully sort an array in-place.

  This is an unstable sort.

  Time Complexity:
    - Best: O(n log(n)) — linearithmic.
    - Average: O(n log(n)) — linearithmic.
    - Worst: O(n^2) — quadratic.
  
  Space Complexity: O(1) — constant.

  Steps:
    - Left by partitioning the entire array using the partition algorithm.
    - Recursively apply partitioning to the sub-array to the left of the returned partition index.
    - Recursively apply partitioning to the sub-array to the right of the returned partition index.
*/

//import your partition method from yesterday or paste it into the same file you work on today
//const { partition } = require("../partition");

const numbers1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const numbers2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const numbers3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const numbers4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) — linearithmic.
 * Average: O(n log(n)) — linearithmic.
 * Worst: O(n^2) — quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} numbers
 * @param {number} left The index marking the start of the current sub-array to sort.
 * @param {number} right The index marking the end of the current sub-array to sort.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(numbers = [], left = 0, right = numbers.length - 1) {
  if (left < right) {
    const pivotIdx = partition(numbers, left, right);
    quickSort(numbers, left, pivotIdx - 1);
    quickSort(numbers, pivotIdx + 1, right);
  }
  return numbers;
}

console.table({"numbers1": quickSort(numbers1), expected1});
console.table({"numbers2": quickSort(numbers2), expected2});
console.table({"numbers3": quickSort(numbers3), expected3});
console.table({"numbers4": quickSort(numbers4), expected4});
