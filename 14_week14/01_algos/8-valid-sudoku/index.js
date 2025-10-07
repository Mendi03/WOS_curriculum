/**
 * @typedef {"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "."} digit
 */

/**
 * Returns true if the partially-filled Sudoku board is valid.
 * Ignores '.' cells; does not solve the puzzle.
 * @param {digit[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  // TODO: Implement validity check using sets for rows, cols, and boxes
  // 1) Initialize rows[9], cols[9], boxes[9] as arrays of Set
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());
  // 2) Loop r=0..8, c=0..8:
  //    - ch = board[r][c]; if ch === '.', continue
  //    - box = Math.floor(r/3) * 3 + Math.floor(c/3)
  //    - If rows[r] has ch OR cols[c] has ch OR boxes[box] has ch → return false
  //    - Else, add ch to rows[r], cols[c], boxes[box]
  // 3) Return true if no conflicts found
}

export { isValidSudoku };
