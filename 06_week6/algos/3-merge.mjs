/* 
  Stable sort.

  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity:
    - Best case: O(n log n) — linearithmic.
    - Average case: O(n log n) — linearithmic.
    - Worst case: O(n log n) — linearithmic.

  Space Complexity: O(n) — linear.

  Steps:
    1. Write a merge function that combines two already sorted arrays into one
       sorted array.
       - You do NOT need to do this in place; it's fine to create a new array.
    2. Write a mergeSort function to sort a given array.
       - Recursively split the array in half and merge the halves back together
         using your merge function.
       - Splitting stops when an array can no longer be divided.
       - An array with one element is considered sorted, so two single-element
         arrays can be merged into a sorted two-element array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(n + m) — linear in the sizes of the two halves.
 * - Space: O(n + m) — we build a new merged array.
 *   // where n = left.length and m = right.length
 * @param {number[]} left
 * @param {number[]} right
 * @returns {number[]} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) 
{
    let n = left.length || 0;
    let m = right.length || 0;
    let i = 0;
    let j = 0;
    let result = [];

    while (i < n && j < m)
    {
        if (left[i] < right[j])
        {
            result.push(left[i]);
            i++;
        }
        else
        {
            result.push(right[j]);
            j++;
        }
    }

    while (i < n)
    {
        result.push(left[i]);
        i++;
    }

    while (j < m)
    {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Tests:
console.log(
  'merge([], []) =>',
  merge(sortedA1, sortedB1),
  'Expected:',
  expectedMerge1
);
console.log(
  'merge([5], [2]) =>',
  merge(sortedA2, sortedB2),
  'Expected:',
  expectedMerge2
);
console.log(
  'merge([3], [2,3,4,7]) =>',
  merge(sortedA3, sortedB3),
  'Expected:',
  expectedMerge3
);
console.log(
  'merge([1,2,4,5,6,9], [3,7,8,10]) =>',
  merge(sortedA4, sortedB4),
  'Expected:',
  expectedMerge4
);

export { merge };