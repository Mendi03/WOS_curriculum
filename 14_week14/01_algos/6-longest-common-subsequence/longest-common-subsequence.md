# Longest Common Subsequence (Dynamic Programming)

## Problem

Given two strings `text1` and `text2`, return the **length** of their **longest common subsequence (LCS)**.

A **subsequence** is a sequence that can be derived from another sequence by deleting some (or none) of the elements without changing the order of the remaining elements. (Not necessarily contiguous.)

---

## Examples (for discussion)

- `text1 = "abcde"`, `text2 = "ace"` → LCS length **3** ("ace")
- `text1 = "abc"`, `text2 = "abc"` → **3**
- `text1 = "abc"`, `text2 = "def"` → **0**

> We’ll validate behavior with the automated test suite in `__tests__/longest-common-subsequence.test.js`.

---

## Intuition

If the last characters match, we can extend an LCS ending at those positions. If they don’t, the best we can do is the **max** of removing one character from either string and trying again. This naturally leads to a **2D DP table (2-Dimensional Dynamic Programming table)** over prefixes of the two strings.

---

## Plan (Bottom‑Up DP)

Define `dp[i][j]` as the LCS length of `text1[0..i-1]` and `text2[0..j-1]`.

Recurrence:

- If `text1[i-1] === text2[j-1]`: `dp[i][j] = dp[i-1][j-1] + 1`
- Else: `dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])`

Answer is `dp[m][n]`, where `m = text1.length`, `n = text2.length`.

Pseudo‑code:

```text
dp = array of size (m+1) x (n+1) filled with 0
for i in 1..m:
  for j in 1..n:
    if text1[i-1] == text2[j-1]:
      dp[i][j] = dp[i-1][j-1] + 1
    else:
      dp[i][j] = max(dp[i-1][j], dp[i][j-1])
return dp[m][n]
```

**Time:** `O(m·n)`
**Space:** `O(m·n)` (can be optimized to `O(min(m, n))` with a rolling row array)

---

## Starter (JavaScript, pseudo‑code only)

Create `index.js` with the function:

```js
/**
 * Returns the length of the Longest Common Subsequence of two strings.
 * @param {string} text1
 * @param {string} text2
 * @returns {number}
 */
function longestCommonSubsequence(text1, text2) {
  // TODO: Implement bottom-up DP
  // 1) Let m = text1.length, n = text2.length
  // 2) Create (m+1) x (n+1) array dp filled with 0
  // 3) For i from 1..m:
  //      For j from 1..n:
  //        If text1[i-1] === text2[j-1]: dp[i][j] = dp[i-1][j-1] + 1
  //        Else: dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
  // 4) Return dp[m][n]
}

export { longestCommonSubsequence };
```
