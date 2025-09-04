import { buildCharFrequency } from "./7-build-char-frequency.mjs";
/**
 * Determines whether two strings are anagrams of each other without using built-in split/sort/join.
 * - Time: O(n)
 * - Space: O(n)
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function isAnagram(s1, s2) {
  // your code here
  let string1 = new Map(buildCharFrequency(s1));
  let string2 = new Map(buildCharFrequency(s2));

  for (let value of string1) {
    if (string1.get(value[0]) !== string2.get(value[0])) return false;
  }
  return true;
}

console.log(isAnagram("listen", "silent"), "=> true");
console.log(isAnagram("hello", "world"), "=> false");
console.log(isAnagram("rail safety", "fairy tales"), "=> true");
console.log(isAnagram("aabbcc", "baccab"), "=> true");
