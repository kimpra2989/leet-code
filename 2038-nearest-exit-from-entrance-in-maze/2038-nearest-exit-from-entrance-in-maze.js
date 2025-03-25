/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  const q = new Q()
  q.push({ len: 0, r: entrance[0], c: entrance[1] })

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const visited = Array.from({ length: maze.length }, () => new Array(maze[0].length).fill(false))
  visited[entrance[0]][entrance[1]] = true

  while (q.length) {
    const { len, r, c } = q.pop()

    for (const [dx, dy] of dirs) {
      const y = r + dy
      const x = c + dx
      if (
        y >= 0 &&
        y < maze.length &&
        x >= 0 &&
        x < maze[0].length &&
        !visited[y][x] &&
        maze[y][x] != '+'
      ) {
        if (
          !(y == entrance[0] && x == entrance[1]) &&
          x == 0 ||
          x == maze[0].length - 1 ||
          y == 0 ||
          y == maze.length - 1
        ) {
          return len + 1
        }
        visited[y][x] = true
        q.push({len : len + 1, r : y, c : x})
      }
    }
  }
  
  return -1
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