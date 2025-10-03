# Climbing Stairs (Dynamic Programming)

## Problem

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can climb **1 or 2 steps**. In how many distinct ways can you climb to the top?

Return the number of distinct ways.

---

## Examples

- `n = 2` → 2
  (1+1, 2)
- `n = 3` → 3
  (1+1+1, 1+2, 2+1)

---

## Constraints

- `1 ≤ n ≤ 45`

This fits within standard integer range. An `O(n)` solution is fine.

---

## Intuition

The problem is essentially Fibonacci:

- To reach step `n`, you can come from step `n-1` (one step) or `n-2` (two steps).
- So `ways(n) = ways(n-1) + ways(n-2)`.

---

## Plan

1. Base cases:
   - `ways(1) = 1`
   - `ways(2) = 2`
2. For `i = 3..n`, compute `ways(i)` as sum of previous two.
3. Return `ways(n)`.

---

## Starter (JavaScript, pseudo-code only)

Create `index.js`:

```js
/**
 * Returns the number of distinct ways to climb to the top of a staircase of n steps,
 * given you can climb 1 or 2 steps at a time.
 * @param {number} n
 * @returns {number}
 */
function climbStairs(n) {
  // TODO: Implement DP solution (iterative)
  // 1) Handle base cases for n=1 and n=2
  // 2) Initialize two variables for previous two results
  // 3) Loop from 3 to n:
  //    - Compute current = prev1 + prev2
  //    - Shift prev variables
  // 4) Return the result
}

export { climbStairs };
```

---

## 🔍 Testing Notes

- Small inputs: n=1, n=2, n=3
- Larger inputs like n=5 (should be 8)
- Edge case upper bound n=45
