# Roman to Integer

## Problem

Given a string `s` representing a Roman numeral, convert it to an integer.

Roman numerals and values:

- I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

**Subtractive rule:** when a smaller symbol appears before a larger one, subtract it:
`IV = 4`, `IX = 9`, `XL = 40`, `XC = 90`, `CD = 400`, `CM = 900`.

Assume `s` is uppercase and valid.

---

## Intuition

Scan left → right. For each char, peek at the next:

- If current < next → subtract current.
- Else → add current.

One pass, constant extra space.

---

## Plan (One Pass)

1. Make a map from Roman symbol → value.
2. Set `total = 0`.
3. For each index `i`:
   - `curr = value(s[i])`
   - `next = value(s[i+1])` (or `0` if none)
   - If `curr < next` → `total -= curr`, else `total += curr`.
4. Return `total`.

**Time:** O(n) **Space:** O(1)

---

## Starter (JavaScript, pseudo-code only)

```js
/**
 * Converts a Roman numeral string to an integer.
 * @param {string} s - Roman numeral (assume uppercase, valid format).
 * @returns {number}
 */
function romanToInt(s) {
  // TODO: Implement one-pass parse with subtractive rule
  // 1) Define a map of Roman symbols to values
  // 2) Initialize total = 0
  // 3) Loop i from 0..s.length-1:
  //    a) curr = value of s[i]
  //    b) next = value of s[i+1] (or 0 if none)
  //    c) If curr < next, subtract curr from total; else add curr
  // 4) Return total
}

export { romanToInt };
```
