import { isPalindrome } from './5-is-palindrome.mjs';

/*
  Longest Palindrome

  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring.

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const strA = 'what up, daddy-o?';
const expectedA = 'dad';

const strB = 'uh, not much';
const expectedB = 'u';

const strC = 'Yikes! my favorite racecar erupted!';
const expectedC = 'e racecar e';

const strD = 'a1001x20002y5677765z';
const expectedD = '5677765';

const strE = 'a1001x20002y567765z';
const expectedE = '567765';

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {
  // your code here
  let result = '';
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < str.length; j++){
      let temp = str.substring(i, j+1);
      if(isPalindrome(temp) && temp.length > result.length){
        result = temp;
      }
    }
  }

  return result;
}

console.log(`${longestPalindromicSubstring(strA)} should equal ${expectedA}`);
console.log(`${longestPalindromicSubstring(strB)} should equal ${expectedB}`);
console.log(`${longestPalindromicSubstring(strC)} should equal ${expectedC}`);
console.log(`${longestPalindromicSubstring(strD)} should equal ${expectedD}`);
console.log(`${longestPalindromicSubstring(strE)} should equal ${expectedE}`);
