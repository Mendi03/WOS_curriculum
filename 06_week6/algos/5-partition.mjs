/* 
  Params: numbers, left, right
    - left and right are indexes that define the portion of the array to partition.
    - Initially, left will be 0 and right will be the last index.
    - Later, these parameters can specify a subsection of the array for partitioning.

  Steps:

  1. Choose a pivot value from the array (commonly the middle element, but any element can be chosen).

  2. Rearrange the array in place so that all values less than the pivot are on its left,
     and all values greater than the pivot are on its right (the order within these sections is not sorted).

  3. Return the index where the left section of smaller items ends.

  Choosing a random pivot helps avoid worst-case O(n^2) performance that can happen if the first or last element is always chosen,
  especially for nearly sorted or reverse sorted data.
  Choosing the middle element is also a good choice in most cases.
  See: https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const numbers1 = [11, 8, 14, 3, 6, 2, 7];
/* 
There are many possible correct outputs for numbers1 depending on the pivot chosen.

For example, if 3 is chosen as the pivot, some valid partitions include:
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const numbers2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const numbers3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const numbers4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index as the "pivot" value, then arranges all numbers less than the
 * pivot to its left and all larger numbers to the right of the pivot.
 * - Time: O(n) — each element is visited once.
 * - Space: O(1) — done in-place.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {number[]} numbers
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The idx where left section of smaller items ends.
 */
function partition(numbers = [], left = 0, right = numbers.length - 1) {
  let pivot = numbers[right];
  let pivotIdx = left;

  for (let i = left; i < right; i++) {
    if (numbers[i] < pivot) {
      // swap
      let temp = numbers[i];
      numbers[i] = numbers[pivotIdx];
      numbers[pivotIdx] = temp;
      pivotIdx++;
    }
  }

  // swap
  let temp = numbers[pivotIdx];
  numbers[pivotIdx] = pivot;
  numbers[right] = temp;
  
  return pivotIdx;
}

export { partition };
