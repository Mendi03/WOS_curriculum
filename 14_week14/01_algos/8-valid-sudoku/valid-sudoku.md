# Valid Sudoku

# Valid Sudoku

## 🧩 Problem

Given a 9×9 Sudoku board, determine if it is **valid** according to Sudoku rules:

- Each **row** contains the digits 1–9 at most once.
- Each **column** contains the digits 1–9 at most once.
- Each **3×3 box** contains the digits 1–9 at most once.

Empty cells are denoted by `'.'` and should be **ignored** when checking validity. You only need to validate the current board configuration — **not** solve it.

---

## 🧠 Intuition

Scan the board once. For each filled cell `(r, c)` with digit `d`, ensure `d` has not already appeared in:

- row `r`,
- column `c`, or
- its 3×3 sub‑box.

We can track seen digits using three collections: `rows[9]`, `cols[9]`, and `boxes[9]`.

> Box index formula: `box = Math.floor(r / 3) * 3 + Math.floor(c / 3)` (values 0..8)

---

## 🚀 Plan (Single Pass, O(81))

1. Create 3 arrays of 9 sets each: `rows`, `cols`, `boxes`.
2. For each cell `(r, c)`:
   - If the value is `'.'`, continue.
   - Compute `box` from `(r, c)`.
   - If the digit is already in `rows[r]`, `cols[c]`, or `boxes[box]`, return `false`.
   - Otherwise add it to all three sets.
3. If the loop completes, return `true`.

**Time:** O(81) ≈ O(1) **Space:** O(1) (bounded by the 9×9 board)

---

## 📝 Starter (JavaScript, pseudo‑code only)

```js
/**
 * @typedef {"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"."} digit
 */

/**
 * Returns true if the partially-filled Sudoku board is valid.
 * Ignores '.' cells; does not attempt to solve the puzzle.
 * @param {digit[][]} board
 * @returns {boolean}
 */
function isValidSudoku(board) {
  // TODO: Validate rows, columns, and 3×3 boxes
  // 1) Initialize rows[9], cols[9], boxes[9] as arrays of Set
  // 2) For r in 0..8:
  //      For c in 0..8:
  //        a) ch = board[r][c]; if ch === '.', continue
  //        b) box = Math.floor(r/3) * 3 + Math.floor(c/3)
  //        c) If rows[r] has ch OR cols[c] has ch OR boxes[box] has ch → return false
  //        d) Otherwise add ch to rows[r], cols[c], boxes[box]
  // 3) After scanning all cells, return true
}

export { isValidSudoku };
```
