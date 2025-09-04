/* 
  Given an array of numbers, move the first occurrence of the maximum value
  to the end of the array in-place.

  You must not use any built-in methods like .splice() or .sort().

  Return the array after the operation is complete.

  Examples:
    [5, 4, 7, 1, 3, 6] => [5, 4, 1, 3, 6, 7]
    [1, 5, 2, 9] => [1, 5, 2, 9]
    [3, 9, 5, 2, 9] => [3, 5, 2, 9, 9]
*/

const nums1 = [5, 4, 7, 1, 3, 6];
const expected1 = [5, 4, 1, 3, 6, 7];

const nums2 = [1, 5, 2, 9];
const expected2 = [1, 5, 2, 9];

const nums3 = [3, 9, 5, 9, 2];
const expected3 = [3, 5, 9, 2, 9];

/**
 * Moves the largest number in the given array to the back.
 * @param {number[]} nums
 * @returns {number[]} The given arr after the max has been moved to back.
 */
function maxToBack(nums) {
  // edge cases
  let max = nums[0];
  let maxIndx = 0;
  let temp;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]; // stores max value
      maxIndx = i; // stores index of max value
    }
  }

  for (let i = maxIndx; i < nums.length - 1; i++) {
    temp = nums[i];
    nums[i] = nums[i + 1]; // shifts value from right to left
    nums[i + 1] = temp; // shifts max value to the right
  }

  return nums;
}

// Tests
const result1 = maxToBack(nums1);
console.log(result1, "should equal", expected1);
console.log(nums1, "should equal", expected1);

const result2 = maxToBack(nums2);
console.log(result2, "should equal", expected2);
console.log(nums2, "should equal", expected2);

const result3 = maxToBack(nums3);
console.log(result3, "should equal", expected3);
console.log(nums3, "should equal", expected3);
