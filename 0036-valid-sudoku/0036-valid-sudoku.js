/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (const row of board) {
    if (!checkLine(row)) return false
  }

  for (let c = 0; c < 9; c++) {
    const col = Array.from(board, (row) => row[c])
    if (!checkLine(col)) return false
  }

  const GridLen = 3
  for (let r = 0; r < 9; r += GridLen) {
    const targetRows = board.slice(r, r + GridLen)

    for (let c = 0; c < 9; c += GridLen) {
      const grid = targetRows.map(row => row.slice(c, c + GridLen))

      if (!checkLine(grid.flat())) return false
    }
  }

  return true
};

function checkLine(line) {
  const seen = new Set()

  for (const d of line) {
    if (d === '.') continue

    if (seen.has(d)) return false

    seen.add(d)
  }

  return true
}
