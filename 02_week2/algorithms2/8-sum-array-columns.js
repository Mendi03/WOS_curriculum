/*
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

const numbersA = [20, 10, 30];
const numbersB = [10, 30, 20];
const expected = [30, 40, 50];

/**
 * Returns a new array that is the sum of the columns of the two given arrays
 * of equal lengths.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums1
 * @param {Array<number>} nums2
 * @returns {Array<number>} The column sums.
 */
function sumArrColumns(nums1, nums2) {
  // code here
  let temp = [];

  for(let i = 0; i < nums1.length; i++){
    let sum = nums1[i] + nums2[i];
    temp[i] = sum;
  }

  return temp;
}

// Tests
const result = sumArrColumns(numbersA, numbersB);
console.log(result, 'should equal', expected);
