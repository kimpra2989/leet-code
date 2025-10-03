/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
  this.cells = Array.from({ length: rows }, () => Array(26).fill(0))
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
  const { row, col } = this.getCellIdx(cell)

  this.cells[row][col] = value
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
  const { row, col } = this.getCellIdx(cell)

  this.cells[row][col] = 0
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
  const [left, right] = formula.slice(1).split('+')

  const calcValue = (x) => {
    if (!isCell(x)) return +x

    const { row, col } = this.getCellIdx(x)

    return this.cells[row]?.[col] ?? 0

    function isCell(x) {
      return /^[A-Z]$/.test(x[0])
    }
  }

  return calcValue(left) + calcValue(right)
};

Spreadsheet.prototype.getCellIdx = function (cell) {
  return {
    row: cell.slice(1) - 1,
    col: cell[0].charCodeAt(0) - 'A'.charCodeAt(0)
  }
}
/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */