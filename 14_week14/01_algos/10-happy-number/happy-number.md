# 😊 Happy Number

## Problem

Write an algorithm to determine if a number `n` is a **happy number**.

A **happy number** is defined by the following process:

1. Starting with any positive integer, replace the number with the **sum of the squares of its digits**.
2. Repeat the process until the number equals 1 (where it stays), or it loops endlessly in a cycle that does **not** include 1.
3. Numbers for which this process ends in 1 are **happy**.

---

## Example

```
Input: n = 19
Process:
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1

Output: true
```

---

## Plan

We can detect cycles using a **set** to remember previously seen numbers.

1. Initialize an empty set `seen`.
2. While `n` is not 1:
   - Replace `n` with the sum of the squares of its digits.
   - If `n` is already in `seen`, return `false` (loop detected).
   - Add `n` to `seen`.
3. If the loop ends (n == 1), return `true`.

**Time:** O(log n)
**Space:** O(log n) (because we only store a few seen values)

---

## Starter Code (pseudo‑code only)

```js
/**
 * Determines whether a number is happy.
 * @param {number} n - Positive integer
 * @returns {boolean}
 */
function isHappy(n) {
  // TODO: Determine if n is a happy number
  // 1) Create a helper to compute sum of squares of digits
  // 2) Initialize a Set for seen numbers
  // 3) While n is not 1:
  //      - Replace n with sum of squares of its digits
  //      - If n already in seen → return false
  //      - Add n to seen
  // 4) Return true if loop exits because n == 1
}

export { isHappy };
```

## Alternate Approach: Floyd’s Cycle Detection

Instead of using a `Set`, we can detect cycles using the **Floyd’s Tortoise and Hare** algorithm — the same technique used in linked list cycle problems.

We treat each number as a node, and the next number in the sequence (`sum of squares of digits`) as its “next pointer.”

**Idea:**
If the process ever cycles (doesn’t reach 1), both a _slow_ pointer (moving one step) and a _fast_ pointer (moving two steps) will eventually meet inside the loop.

**Steps:**

1. Define a helper `sumOfSquares(n)`.
2. Initialize:
   - `slow = n`
   - `fast = sumOfSquares(n)`
3. While `fast !== 1` and `slow !== fast`:
   - `slow = sumOfSquares(slow)`
   - `fast = sumOfSquares(sumOfSquares(fast))`
4. If `fast === 1`, return `true`; otherwise, return `false`.

**Time:** O(log n)
**Space:** O(1)

---

## Pseudocode (Floyd’s version)

```js
/**
 * Determines whether a number is happy using Floyd’s Cycle Detection.
 * @param {number} n - Positive integer
 * @returns {boolean}
 */
function isHappyFloyd(n) {
  // TODO: Determine if n is a happy number using Floyd’s Cycle Detection
  // 1) Define a helper function sumOfSquares(num)
  // 2) Initialize slow = n and fast = sumOfSquares(n)
  // 3) While fast != 1 and slow != fast:
  //      - slow = sumOfSquares(slow)
  //      - fast = sumOfSquares(sumOfSquares(fast))
  // 4) Return true if fast == 1; otherwise, false
}
```
