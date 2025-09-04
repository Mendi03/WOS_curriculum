/*
  Return the Fibonacci number at the nth position using recursion.

  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

  Each number in the sequence is the sum of the two preceding numbers,
  starting with 0 and 1 as the first two values.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

/**
 * Recursively calculates the nth number in the Fibonacci sequence.
 * - Time: O(2^n) — due to repeated calculations of overlapping subproblems.
 * - Space: O(n) — due to the call stack from recursive calls.
 * @param {number} num - The position in the Fibonacci sequence (0-based index).
 * @returns {number} The Fibonacci number at the given position.
 */
function fibonacci(num) {
  if(num <= 1) return num;  
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log('Test Case 1:', fibonacci(num1) === expected1 ? 'PASS' : 'FAIL');
console.log('Expected:', expected1, '| Received:', fibonacci(num1));

console.log('Test Case 2:', fibonacci(num2) === expected2 ? 'PASS' : 'FAIL');
console.log('Expected:', expected2, '| Received:', fibonacci(num2));

console.log('Test Case 3:', fibonacci(num3) === expected3 ? 'PASS' : 'FAIL');
console.log('Expected:', expected3, '| Received:', fibonacci(num3));

console.log('Test Case 4:', fibonacci(num4) === expected4 ? 'PASS' : 'FAIL');
console.log('Expected:', expected4, '| Received:', fibonacci(num4));

console.log('Test Case 5:', fibonacci(num5) === expected5 ? 'PASS' : 'FAIL');
console.log('Expected:', expected5, '| Received:', fibonacci(num5));

console.log('Test Case 6:', fibonacci(num6) === expected6 ? 'PASS' : 'FAIL');
console.log('Expected:', expected6, '| Received:', fibonacci(num6));
