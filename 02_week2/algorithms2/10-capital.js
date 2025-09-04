const str1 = "hello world";
const expected1 = "Hello World";

const str2 = "a quick brown fox";
const expected2 = "A Quick Brown Fox";

// Bonus: ignore extra spaces and handle already capitalized words
const str3 = "  leading and trailing   spaces ";
const expected3 = "Leading And Trailing Spaces";

const str4 = "already Title Case";
const expected4 = "Already Title Case";

const str5 = "";
const expected5 = "";

/**
 * Converts the given string to title case.
 * - Time: O(n) where n is the length of the string, as we iterate through it.
 * - Space: O(n) where n is the length of the string, due to creating a new string or array of words.
 * @param {string} str A string to be converted to title case.
 * @returns {string} The string in title case.
 */
function titleCase(str) {
  // your code here
}

function titleCase(wordsStr) {
  //your code here
  let capitalized = 1;
  let prev = 0;
  let string = "";
  for (let i in wordsStr) {
    if (wordsStr[+i].match(/[a-z]/i) && capitalized) {
      string += wordsStr[+i].toUpperCase();
      capitalized = 0;
      prev = 0;
    } else if (wordsStr[+i] == " " && prev == 0) {
      string += wordsStr[+i];
      capitalized = 1;
      prev = 1;
    } else if (wordsStr[+i] == " ") {
      prev = 1;
    } else {
      string += wordsStr[+i];
    }
  }
  return string;
}

// tests:
console.log(`"${str1}" -> "${titleCase(str1)}" (Expected: "${expected1}")`);
console.log(`"${str2}" -> "${titleCase(str2)}" (Expected: "${expected2}")`);
console.log(`"${str3}" -> "${titleCase(str3)}" (Expected: "${expected3}")`);
console.log(`"${str4}" -> "${titleCase(str4)}" (Expected: "${expected4}")`);
console.log(`"${str5}" -> "${titleCase(str5)}" (Expected: "${expected5}")`);
