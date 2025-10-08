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
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      //    - ch = board[r][c]; if ch === '.', continue
      let ch = board[r][c];
      if (ch === '.') continue;
      
      let box = Math.floor(r/3) * 3 + Math.floor(c/3)
      //    - If rows[r] has ch OR cols[c] has ch OR boxes[box] has ch → return false
      if (rows[r].has(ch) || cols[c].has(ch) || boxes[box].has(ch)) return false;
      //    - Else, add ch to rows[r], cols[c], boxes[box]
      rows[r].add(ch);
      cols[c].add(ch);
      boxes[box].add(ch);
    }
  }
  // 3) Return true if no conflicts found
  return true;
}

export { isValidSudoku };
