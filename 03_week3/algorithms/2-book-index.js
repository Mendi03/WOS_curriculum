/*
Book Index

Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const numsA = [1, 13, 14, 15, 37, 38, 70];
const expectedA = "1, 13-15, 37-38, 70";

const numsB = [5, 6, 7, 8, 9];
const expectedB = "5-9";

const numsC = [1, 2, 3, 7, 9, 15, 16, 17];
const expectedC = "1-3, 7, 9, 15-17";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
function bookIndex(nums) {
  let isConsecutive = false;
  let result = "";

  for (let i = 0; i < nums.length; i++) {
    // detects a sequence
    if (nums[i + 1] === nums[i] + 1) {
      if (isConsecutive === false) {
        result += nums[i];
      }
      isConsecutive = true;
      continue;
    }

    // detects the end of a sequence
    if (isConsecutive && nums[i + 1] != nums[i] + 1) {
      result += "-" + nums[i];
      if (i < nums.length - 1) result += ", ";
      isConsecutive = false;
      continue;
    }

    // normal index page
    if (!isConsecutive) {
      result += nums[i];
      if (i < nums.length - 1) result += ", ";
    }
  }

  return result;
}

console.log(bookIndex(numsA));
console.log(bookIndex(numsB));
console.log(bookIndex(numsC));
