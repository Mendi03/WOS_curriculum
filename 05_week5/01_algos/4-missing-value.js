/*
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N. One integer is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/*
  Bonus: The lowest value can now be any integer (including negatives),
  instead of always starting at 0.
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

const nums5 = [10, 11, 13, 12, 15];
const expected5 = 14;

const nums6 = [-2, -1, -3, -5];
const expected6 = -4;

/**
 * Finds the missing integer in an unordered array that should form a
 * consecutive sequence of integers from 0 to N (or any range in the bonus case).
 * Only one integer is missing. If none are missing, return null.
 *
 * Bonus: The integers can start and end at any value (not just from 0 to N).
 *
 * - Time: O(?)
 * - Space: O(?)
 *
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to complete the sequence,
 *   or null if the array already forms a complete consecutive set.
 */
// function missingValue(unorderedNums) {
//   // your code here
//   let lowValue = unorderedNums[0];
//   let highValue = unorderedNums[0];

//   for(let i = 0; i < unorderedNums.length; i++){

//     if(unorderedNums[i + 1] < lowValue){
//       lowValue = unorderedNums[i+1];
//     }
//     if(unorderedNums[i + 1] > highValue){
//       highValue = unorderedNums[i+1];
//     }
//   }

//   let count = 0;
//   for(let i = 0; i < unorderedNums.length; i++){
//     if(unorderedNums[i] == lowValue + count)
//     {
//       i = 0;
//       count++;
//     }
//     else{
//       return lowValue + 1;
//     }
//   }

//     console.log(lowValue);
//     console.log(highValue);
// }

function missingValue(unorderedNums) 
{
    let lowValue = unorderedNums[0];
    let highValue = unorderedNums[0];

    for(let i = 0; i < unorderedNums.length; i++)
    {
      
        if(unorderedNums[i + 1] < lowValue)
        {
            lowValue = unorderedNums[i+1];
        }
        if(unorderedNums[i + 1] > highValue)
        {
            highValue = unorderedNums[i+1];
        }
    }

    let missValue;
    for (let i = lowValue; i < highValue; i++)
    {
        if(unorderedNums.includes(i))
        {
            continue;
        }
        else
            missValue = [i];

    }
    return missValue;
}

console.log('Test 1:', missingValue(nums1), 'Expected:', expected1);
console.log('Test 2:', missingValue(nums2), 'Expected:', expected2);
console.log('Test 3 (Bonus):', missingValue(nums3), 'Expected:', expected3);
console.log('Test 4 (Bonus):', missingValue(nums4), 'Expected:', expected4);
console.log('Test 5 (Bonus):', missingValue(nums5), 'Expected:', expected5);
console.log('Test 6 (Bonus):', missingValue(nums6), 'Expected:', expected6);
