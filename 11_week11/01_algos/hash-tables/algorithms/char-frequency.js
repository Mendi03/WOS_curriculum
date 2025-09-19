import { HashTable } from '../hash-table.js';

/**
 * Builds a character frequency table using the custom HashTable.
 * By default the function lowercases letters and ignores whitespace.
 * You can override this via the options parameter.
 *
 * @param {string} str - Input string to analyze.
 * @param {{ ignoreWhitespace?: boolean, caseInsensitive?: boolean }} [options]
 * @returns {Record<string, number>} An object mapping each character to its count.
 */
function charFrequency(str,{ ignoreWhitespace = true, caseInsensitive = true } = {}) {
  // TODO:
  // Initialize a HashTable.
  let hashTable = new HashTable();
  // Loop through each character of the string.
  for (let char of str) {
    if (char == " "|| char == "\t" && ignoreWhitespace) {
      continue;
    }
    if (caseInsensitive){
      char = char.toLowerCase();
    }
    let temp = hashTable.get(char);
    if (temp == undefined) {
      hashTable.set(char, 1)
      // if(keys.includes())
      continue
    }
    else{
      hashTable.set(char, temp + 1)
    }

    // hashTable.set(char);
  }
  

  return Object.fromEntries(hashTable.buckets.flat());


}

export { charFrequency, charFrequencyRaw };
