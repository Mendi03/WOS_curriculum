/*
  Longest Consecutive Streak

  Given an unsorted array of integers, return the length of the longest
  consecutive sequence of integers (in any order). The numbers do not need
  to be adjacent in the array — only numerically consecutive.

  Note: You must write an algorithm that runs in O(n) time.

  Examples:
  [100, 4, 200, 1, 3, 2] -> 4  // The longest streak is [1, 2, 3, 4]
  [0, 3, 7, 2, 5, 8, 4, 6, 1] -> 9  // The streak is [0 through 8]
*/

const nums1 = [100, 4, 200, 1, 3, 2];
const expected1 = 4;

const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 1];
const expected2 = 9;

const nums3 = [10, 5, 12, 3, 55, 2, 4];
const expected3 = 4; // [2, 3, 4, 5]

const nums4 = [];
const expected4 = 0;

/**
 * Returns the length of the longest consecutive streak of integers in any order.
 * Time: O(n)
 * Space: O(n)
 *
 * @param {number[]} nums
 * @returns {number}
 */
function longestConsecutive(nums) {
  // Your code here
}

console.log('Test 1:', longestConsecutive(nums1), 'Expected:', expected1);
console.log('Test 2:', longestConsecutive(nums2), 'Expected:', expected2);
console.log('Test 3:', longestConsecutive(nums3), 'Expected:', expected3);
console.log('Test 4:', longestConsecutive(nums4), 'Expected:', expected4);
