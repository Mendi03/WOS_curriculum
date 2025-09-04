/* 
  Visualization: node
    
  Selection Sort is an unstable, in-place sorting algorithm.
  
  Task:
    Create a function that uses Selection Sort to sort an unsorted array
    in-place.
    
    Start at the beginning of the list and scan through to find the smallest value.
    Swap this smallest value with the value at the starting position. 
    Next, treat the first position as sorted and repeat the process for the rest of the list: 
    find the smallest value in the unsorted portion, swap it into the correct position, 
    and continue until the entire list is sorted.
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array of numbers in place using Selection Sort.
 *
 * Complexity:
 * - Best case: O(n^2) quadratic.
 * - Average case: O(n^2) quadratic.
 * - Worst case: O(n^2) quadratic.
 * - Space: O(1) constant.
 *
 * @param {number[]} numbers - The array of numbers to sort.
 * @returns {number[]} The sorted array (same reference as the input).
 */
function selectionSort(numbers) {
  let minIndex = 0;
  let subArrayLength = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    minIndex = i;
    for (let j = subArrayLength; j < numbers.length; j++) {
      if (numbers[j + 1] < numbers[minIndex]) {
        //set the new minimum
        minIndex = j + 1;
      }
    }
    //swap with current
    [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
    subArrayLength++;
  }
  return numbers;
}

console.log(
  'Ordered input:',
  selectionSort([...numbersOrdered]),
  'Expected:',
  expected
);
console.log(
  'Random order input:',
  selectionSort([...numbersRandomOrder]),
  'Expected:',
  expected
);
console.log(
  'Reversed input:',
  selectionSort([...numbersReversed]),
  'Expected:',
  expected
);
