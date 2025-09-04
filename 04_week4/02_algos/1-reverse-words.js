/*
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

const str1 = 'hello';
const expected1 = 'olleh';

const str2 = 'hello world';
const expected2 = 'olleh dlrow';

const str3 = 'abc def ghi';
const expected3 = 'cba fed ihg';

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
  // your code here

  let flipped = splitString(str);
  let reversedString = "";

  for(let i = 0; i < flipped.length; i++){
    let toFlip = flipped[i];
    for(let j = toFlip.length - 1; j >= 0; j--){
      reversedString += toFlip[j];
    }
    if(i !== flipped.length-1){
      reversedString += " ";
    }
  }

  return reversedString;
}

function splitString(str){
  let words = [];
  let toAppend = "";

  for(let i = 0; i < str.length; i++){
    if(str[i] == " "){
      words.push(toAppend);
      toAppend = "";
      continue;
    }

    else{
      toAppend += str[i];
    }
  }
  words.push(toAppend);
  
  return words;
}

console.log(`${reverseWords(str1)} should equal ${expected1}`);
console.log(`${reverseWords(str2)} should equal ${expected2}`);
console.log(`${reverseWords(str3)} should equal ${expected3}`);
