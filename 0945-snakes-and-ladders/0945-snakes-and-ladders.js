/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  board.reverse()
  const cols = board[0].length
  const rows = board.length
  const visited = new Set()

  const q = new Q()
  q.push({ depth: 0, pos: 1 })

  while (q.length > 0) {
    const { depth, pos } = q.pop()

    const span = Math.min(6, cols ** 2)
    for (let i = 1; i <= span && pos + i <= cols ** 2; i++) {
      let nextPos = pos + i

      if (visited.has(nextPos)) continue

      visited.add(nextPos)

      const { row, col } = findIdx(nextPos)

      const nextVal = board[row][col]
      if (nextVal !== -1) {
        nextPos = nextVal
      }

      if (nextPos === cols ** 2) return depth + 1

      q.push({ depth: depth + 1, pos: nextPos })
    }
  }

  return -1

  function findIdx(pos) {
    pos -= 1
    const row = ~~(pos / cols)
    const normalCol = pos % cols
    const col = (row & 1) == 0 ? normalCol : cols - 1 - normalCol

    return { row, col }
  }
};


class Q {
  constructor() {
    this.s = {}
    this.head = this.tail = 0
  }

  push(val) {
    this.s[this.tail++] = val
  }

  pop() {
    const val = this.s[this.head]
    delete this.s[this.head++]

    return val
  }

  get length() {
    return this.tail - this.head
  }
}