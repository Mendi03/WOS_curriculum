/**
 * Determines whether a number is happy.
 *
 * A happy number eventually reaches 1 when repeatedly replaced by the
 * sum of the squares of its digits. If it enters a loop, it's unhappy.
 *
 * Time: O(log n)
 * Space: O(log n)
 *
 * @param {number} n - Positive integer
 * @returns {boolean}
 */
function isHappy(n) {
  // TODO: Determine if n is a happy number
  // 1) Create a helper to compute sum of squares of digits
  let sum = sumOfSquares(n);
  // 2) Initialize a Set for seen numbers
  let seenNums = new Map();
  // 3) While n is not 1:
  while (n != 1) {
    n = sumOfSquares(n);
    if (seenNums.has(n)) {
      // - Replace n with sum of squares of its digits
      // - If n already in seen → return false
      return false;
    }
    // - Add n to seen
    seenNums.set(n, n);
  }
  // 4) Return true if loop exits because n == 1
  return true;
}

function sumOfSquares(n) {
  let split = n.toString().split("").map(Number);
  let result = 0;
  for (let i = 0; i < split.length; i++) {
    result += split[i] * split[i];
  }
  return result;
}

// 1) Create a helper to compute sum of squares of digits
//   function sumOfSquares(num) {
//     let sum = 0;
//     while (num > 0) {
//       let digit = num % 10;
//       sum += digit * digit;
//       num = Math.floor(num / 10);
//     }
//     return sum;
//   } 

function isHappyFloyd(n) {
  // TODO: Determine if n is a happy number using Floyd’s Cycle Detection
  // 1) Define a helper function sumOfSquares(num)
  // 2) Initialize slow = n and fast = sumOfSquares(n)
  // 3) While fast != 1 and slow != fast:
  //      - slow = sumOfSquares(slow)
  //      - fast = sumOfSquares(sumOfSquares(fast))
  // 4) Return true if fast == 1; otherwise, false
}

export { isHappy, isHappyFloyd };
