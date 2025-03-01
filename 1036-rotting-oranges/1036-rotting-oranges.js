/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const q = new Q()
  let oranges = 0

  // bfs Queue initialize
  const row = grid.length
  const col = grid[0].length
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      const status = grid[r][c]
      if (status == 0) continue

      if (status == 2) q.push({ day: 0, r, c })
      oranges++
    }
  }

  // bfs
  let rotten = 0
  let max_day = 0
  while (q.length > 0) {
    const { day, r, c } = q.pop()
    if (day > max_day) max_day = day
    rotten++

    if (grid[r + 1]?.[c] == 1) {
      grid[r + 1][c] = 2
      q.push({ day: day + 1, r: r + 1, c })
    }
    if (grid[r - 1]?.[c] === 1) {
      grid[r - 1][c] = 2
      q.push({ day: day + 1, r: r - 1, c })
    }
    if (grid[r][c + 1] === 1) {
      grid[r][c + 1] = 2
      q.push({ day: day + 1, r, c: c + 1 })
    }
    if (grid[r][c - 1] === 1) {
      grid[r][c - 1] = 2
      q.push({ day: day + 1, r, c: c - 1 })
    }
  }

  if (oranges > rotten) return -1

  return max_day
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
    return this.s[this.head++]
  }

  get length() {
    return this.tail - this.head
  }
}