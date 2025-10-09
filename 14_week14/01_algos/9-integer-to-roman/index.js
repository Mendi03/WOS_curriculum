/**
 * Converts an integer to a Roman numeral.
 *
 * Time: O(1)
 * Space: O(1)
 *
 * @param {number} num - Integer between 1 and 3999.
 * @returns {string} Roman numeral string.
 */
function intToRoman2(num) {
  // TODO: Convert integer to Roman numeral
  // 1. Create two parallel arrays of Roman symbols and their numeric values, ordered from largest to smallest.
  const values = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4,
    1
  ];
  const symbols = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV",
    "I"
  ];
  // 2. Start with an empty result string.
  let result = "";
  // 3. While the number is greater than zero:
  for(let i = 0; i < values.length; i++){
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }
  
  return result;
}

var intToRoman = function(num) {
  const values = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4,
    1
  ];
  const symbols = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV",
    "I"
  ];
  // 2. Start with an empty result string.
  let result = "";
  // 3. While the number is greater than zero:
  while (num > 0) {
    //   - Find the largest value less than or equal to the number.
    for (let i = 0; i < values.length; i++) {
      if (num >= values[i]) {
        result += symbols[i];
        num -= values[i];
        break;
      }
    }
  }
  return result;
}

export { intToRoman };
