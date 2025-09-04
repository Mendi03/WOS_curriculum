import { NotImplementedError } from '../classes/not-implemented-error.js';
import { ArrayStack } from '../classes/array-stack.js';

/**
 * Reverses a string using a stack.
 * @param {string} str - The input string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  let stack = new ArrayStack();
  for (let ch of str) {
    stack.push(ch);
  }
  let reversed = stack.toArray();
  return reversed.join("");
}

/**
 * Checks if a string is a palindrome using a stack.
 * @param {string} str - The input string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  let reverse = reverseString(str);
  return str === reverse;
}

/**
 * Checks whether a string has balanced parentheses using a stack.
 * Only `(` and `)` characters are considered; all others are ignored.
 * @param {string} str - The input string containing parentheses.
 * @returns {boolean} True if every opening parenthesis has a matching closing parenthesis
 * in the correct order, false otherwise.
 */
function parensValid(str) {
  let stack = new ArrayStack();
  for (let ch of str){
    if (ch === '(') stack.push('(');
    if (ch === ')') {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }
  return stack.isEmpty();
}

/**
 * Finds the next greater element to the right for each element in the array.
 * For each element, the function returns the first greater element to its right;
 * if none exists, -1 is returned for that element.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} An array where each element is the next greater element to
 * the right of the corresponding input element.
 */
function nextGreaterRight(arr) {
  if (arr.length == 0) return [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        result.push(arr[j]);
        found = true;
        break;
      }
    }
    if (!found) result.push(-1);
  }
  return result;
}

console.log(parensValid("(a)("));

export { reverseString, isPalindrome, parensValid, nextGreaterRight };
