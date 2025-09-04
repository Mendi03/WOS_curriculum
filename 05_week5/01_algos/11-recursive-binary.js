/*
  Recursive Binary Search

  Given a **sorted** array of integers and a target value, return a boolean
  indicating whether the target exists in the array.

  Use recursion to implement the binary search algorithm.
  Do not iterate through every element.

  Approach:
    1. Compare the target value to the middle element.
    2. If it matches, return true.
    3. If it’s less, recurse on the left half.
    4. If it’s greater, recurse on the right half.
    5. If the range becomes invalid, return false.
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 *
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 *
 * Time Complexity: O(log n) — The array is halved each recursive call.
 * Space Complexity: O(log n) — Due to the recursive call stack.
 */
// don't be afraid to add parameters! <---------
function binarySearch(sortedNums, searchNum) {
  // your code here
  let lowestIdx = 0;
  let highestIdx = sortedNums.length - 1;

  const mid = Math.floor((highestIdx + lowestIdx) / 2);

  if (sortedNums[mid] === searchNum) return true;

  
  else if (sortedNums[mid] < searchNum)
    return binarySearch(sortedNums.slice(mid + 1, highestIdx + 1), searchNum);

  else if (sortedNums[mid] > searchNum)
    return binarySearch(sortedNums.slice(lowestIdx, mid), searchNum);

  return false;
}

console.log(
  'Test Case 1:',
  binarySearch(nums1, searchNum1) === expected1 ? 'PASS' : 'FAIL'
);
console.log(
  'Expected:',
  expected1,
  '| Received:',
  binarySearch(nums1, searchNum1)
);

console.log(
  'Test Case 2:',
  binarySearch(nums2, searchNum2) === expected2 ? 'PASS' : 'FAIL'
);
console.log(
  'Expected:',
  expected2,
  '| Received:',
  binarySearch(nums2, searchNum2)
);

console.log(
  'Test Case 3:',
  binarySearch(nums3, searchNum3) === expected3 ? 'PASS' : 'FAIL'
);
console.log(
  'Expected:',
  expected3,
  '| Received:',
  binarySearch(nums3, searchNum3)
);
