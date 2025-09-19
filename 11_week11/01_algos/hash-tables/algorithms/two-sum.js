import { HashTable } from '../hash-table.js';

/**
 * Two Sum — find indices of the two numbers such that they add up to target.
 * Uses the custom HashTable (array-backed buckets) for O(n) average time.
 *
 * Returns the first pair of indices found in left-to-right order [i, j] (i < j),
 * or null if no such pair exists. Assume that each input would have
 * exactly one solution or no solutions, and you may not use the same element
 * twice.
 *
 * @param {number[]} nums - Array of numbers.
 * @param {number} target - Target sum.
 * @returns {[number, number] | null}
 */
function twoSum(nums, target) {
  // TODO: Implement Two Sum using HashTable
  // 1. Create a new HashTable sized relative to the nums length.
  let table = new HashTable(nums.length);
  // 2. Loop through nums with index i:
  for(let i = 0; i < nums.length; i++){
    //    a. For each number n, compute its complement (target - n).
    let complement = target - nums[i];
    //    b. Check if the complement already exists in the table:
    //       - If yes, return [indexOfComplement, i].
    if(table.has(complement.toString())) return [table.get(complement.toString()), i];
    //    c. Otherwise, store n in the table with its index.
    else{
      table.set(nums[i].toString(), i);
    }

  }
  // 3. If no pair found by the end, return null.
    return null;
}

export { twoSum };
