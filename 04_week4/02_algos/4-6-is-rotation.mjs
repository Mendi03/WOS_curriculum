import { rotateStr } from "./4-5-rotate-string.mjs";

/*
  Is Rotation
  Write a function isRotation(str1, str2) that returns true
  if the second string is a rotation of the first. A rotation
  means the characters are in the same order but shifted
  circularly.
*/

const strA1 = "ABCD";
const strA2 = "CDAB";
// Explanation: Starting from C in strA2, the order wraps around to match strA1 exactly.
const expectedA = true;

const strB1 = "ABCD";
const strB2 = "CDBA";
// Explanation: strB2 has the same letters, but the order is incorrect—it’s not a rotation of strB1.
const expectedB = false;

const strC1 = "ABCD";
const strC2 = "BCDAB";
// Explanation: strC2 has the correct characters in order but includes an extra letter—it’s not the same length as strC1.
const expectedC = false;

/**
 * Checks whether s2 is a rotation of s1.
 * A string is a rotation if it can be shifted circularly to become the other.
 * - Time: O(n), where n is the length of the strings.
 * - Space: O(n)
 * @param {string} s1 - The original string.
 * @param {string} s2 - The string to test for rotation.
 * @returns {boolean} True if s2 is a rotation of s1, false otherwise.
 */
function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    if (rotateStr(s1, i) === s2) return true;
  }
  return false;
}

console.log(isRotation(strA1, strA2)); // expected: true
console.log(isRotation(strB1, strB2)); // expected: false
console.log(isRotation(strC1, strC2)); // expected: false
