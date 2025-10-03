/**
 * Returns the number of distinct ways to climb to the top of a staircase of n steps,
 * given you can climb 1 or 2 steps at a time.
 * @param {number} n
 * @returns {number}
 */
function climbStairs2(n) {
  // TODO: Implement DP solution (iterative)
  // 1) Handle base cases for n=1 and n=2
  if (n == 1) return 1;
  if (n == 2) return 2;
  // 2) Initialize two variables for previous two results
  let prev1 = 1;
  let prev2 = 2;

  let current = 0
  // 3) Loop from 3 to n:
  for(let i = 3; i <= n; i++){
    //    - Compute current = prev1 + prev2
    current = prev1 + prev2;
    //    - Shift prev variables
    prev1 = prev2;
    prev2 = current;
  }
  // 4) Return the result
  return current;
}

function climbStairs(n, stored = null){

  if (stored == null) stored = new Map();
  if (n == 1) return 1;
  if (n == 2) return 2;

  if (stored.has(n)) {
    return stored.get(n)
  }

  stored.set(n, climbStairs(n-1, stored) + climbStairs(n-2, stored)) 

  return stored.get(n);
}



export { climbStairs };
