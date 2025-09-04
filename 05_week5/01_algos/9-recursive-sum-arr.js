/*
  Recursively sum the elements of an array of integers.
*/

const numsA = [1, 2, 3];
const expectedA = 6;

const numsB = [1];
const expectedB = 1;

const numsC = [];
const expectedC = 0;

const numsD = [4, 5, 1, 2, 3];
const expectedD = 15;

/**
 * Recursively sums the elements in the given array.
 * - Time Complexity: O(n), where n is the length of the array.
 * - Space Complexity: O(n) due to the call stack from recursion.
 * @param {Array<number>} nums - The array of numbers to sum.
 * @returns {number} The total sum of the array elements.
 */
function recursiveSumArr(nums) {
  // your code here
  if(nums.length === 0){
    return 0;
  }

  if(nums.length === 1){
    return nums[0];
  }

  let slicedArr = nums.slice(0, -1);
  return nums[nums.length - 1] + recursiveSumArr(slicedArr)
}

console.log('Test 1:', recursiveSumArr(numsA), 'Expected:', expectedA);
console.log('Test 2:', recursiveSumArr(numsB), 'Expected:', expectedB);
console.log('Test 3:', recursiveSumArr(numsC), 'Expected:', expectedC);
console.log('Test 3:', recursiveSumArr(numsD), 'Expected:', expectedD);
