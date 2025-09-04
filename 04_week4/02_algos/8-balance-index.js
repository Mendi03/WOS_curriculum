/*
  Balance Index

  A balance index is an index where the sum of the elements to the left is equal
  to the sum of the elements to the right—excluding the value at the index itself.

  Return the index if such a point exists, otherwise return -1.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [5, 5, 7, 1, 9];
const expected3 = 2;

const nums4 = [1,1,1,1,1,4];
const expected4 = 4;

/**
 * Finds the index in the array where the sum of all elements to the left
 * equals the sum of all elements to the right, excluding the value at the index.
 *
 * - Time: O(?).
 * - Space: O(?).
 *
 * @param {Array<number>} nums - The input array of numbers.
 * @returns {number} The balance index, or -1 if none exists.
 */
function balanceIndex(nums) {
  // your code here
  let leftSide = 0;
  let rightSide = 0;

  if(nums.length < 3) return -1;

  for(let i = nums.length - 2; i > 0; i--){
    rightSide += nums[i+1];
    for(let j = 0; j <= i - 1; j++){
      leftSide += nums[j];
    }

    if(leftSide === rightSide) return i;
    else{
      leftSide = 0;
    }
  }

  return -1;
}

console.log(`${balanceIndex(nums1)} should equal ${expected1}`);
console.log(`${balanceIndex(nums2)} should equal ${expected2}`);
console.log(`${balanceIndex(nums3)} should equal ${expected3}`);
console.log(`${balanceIndex(nums4)} should equal ${expected4}`);
