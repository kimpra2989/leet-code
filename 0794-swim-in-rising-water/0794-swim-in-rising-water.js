/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const n = grid.length
  const minTimes = Array.from({ length: n }, () => Array(n).fill(n ** 2))

  const Q = new _Q()
  Q.push({ t: 0, r: 0, c: 0 })

  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  while (Q.length > 0) {
    const { t, r, c } = Q.pop()

    if (t >= minTimes[r][c]) continue

    const time = grid[r][c]
    minTimes[r][c] = Math.max(t, time)

    for (const [dr, dc] of dirs) {
      const nextR = r + dr
      const nextC = c + dc
      const inBoundary = 0 <= nextR && nextR < n && 0 <= nextC && nextC < n

      if (inBoundary) {
        const nextTime = grid[nextR][nextC]
        const isMinTime = nextTime < minTimes[nextR][nextC]

        if (isMinTime) Q.push({ t : Math.max(t, time), r: nextR, c: nextC })
      }
    }
  }

  return minTimes[n - 1][n - 1]
};

class _Q {
  constructor() {
    this.q = {}
    this.head = this.tail = 0
  }

  push(v) {
    this.q[this.tail++] = v
  }

  pop() {
    const v = this.q[this.head]
    delete this.q[this.head++]

    return v
  }

  get length() {
    return this.tail - this.head
  }
}