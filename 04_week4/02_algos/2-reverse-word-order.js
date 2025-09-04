/*
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const strA = 'This is a test';
const expectedA = 'test a is This';

const strB = 'hello';
const expectedB = 'hello';

const strC = '   This  is a   test  ';
const expectedC = 'test a is This';

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
  // your code here
  let wordsArray = splitString(wordsStr);

  let reversedOrder = "";
  
  for(let i = wordsArray.length - 1; i >= 0 ; i--){
    reversedOrder += wordsArray[i];
    if(i != 0){
      reversedOrder += " ";
    }
  }

  return reversedOrder;
}

function splitString(str){
  let words = [];
  let toAppend = "";

  for(let i = 0; i < str.length; i++){
    if(str[i] == " "){
      if(toAppend == ""){
        continue;
      }
      words.push(toAppend);
      toAppend = "";
      continue;
    }

    else{
      toAppend += str[i];
    }
  }
  if(toAppend != ""){
    words.push(toAppend);
  }
  
  return words;
}


console.log(`${reverseWordOrder(strA)} should equal ${expectedA}`);
console.log(`${reverseWordOrder(strB)} should equal ${expectedB}`);
console.log(`${reverseWordOrder(strC)} should equal ${expectedC}`);
