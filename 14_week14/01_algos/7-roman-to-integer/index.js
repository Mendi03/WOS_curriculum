/**
 *
 * @param {string} s
 * @returns {number}
 */
function romanToInt(s) {
  // TODO: Implement one-pass parse with subtractive rule
  // 1) Define a map of Roman symbols to values
  const romanValues = new Map([
        ["M", 1000],
        ["D", 500],
        ["C", 100],
        ["L", 50],
        ["X", 10],
        ["V", 5],
        ["I", 1]
    ])
  
  // 2) Initialize total = 0
  let total = 0, curr, next;
  // 3) Loop i from 0..s.length-1:
  for(let i = 0; i < s.length; i++){
    curr = romanValues.get(s[i]);
    next = romanValues.get(s[i + 1]) || 0;
    if (curr < next) {
      total += next - curr;
      i++;
    }
    else{
      total += curr;
    }
  }

  return total;
  //    a) curr = value of s[i]
  //    b) next = value of s[i+1] (or 0 if none)
  //    c) If curr < next, subtract curr from total; else add curr
  // 4) Return total
}

export { romanToInt };
