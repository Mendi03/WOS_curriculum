/*
  Acronyms

  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).

  Do it with .split first if you need to, then try to do it without
*/

const strA = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const strB = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const strC = "software development life cycle";
const expectedC = "SDLC";

// Bonus: ignore extra spaces
const strD = "  global   information tracker    ";
const expectedD = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(wordsStr) {
  //your code here
  let capitalized = 1;
  temp = "";
  for (let i in wordsStr) {
    if (wordsStr[+i].match(/[a-z]/i) && capitalized) {
      temp += wordsStr[+i].toUpperCase();
      console.log(temp);
      capitalized = 0;
    } else if (wordsStr[+i] == " ") {
      capitalized = 1;
    }
  }

  return temp;
}

// tests:
console.log(`"${strA}" -> "${acronymize(strA)}" (Expected: "${expectedA}")`);
console.log(`"${strB}" -> "${acronymize(strB)}" (Expected: "${expectedB}")`);
console.log(`"${strC}" -> "${acronymize(strC)}" (Expected: "${expectedC}")`);
console.log(`"${strD}" -> "${acronymize(strD)}" (Expected: "${expectedD}")`);
