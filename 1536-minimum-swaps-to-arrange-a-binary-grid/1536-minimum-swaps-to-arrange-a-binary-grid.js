/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function (grid) {
  const a = grid.length
  const zeroCounts = new Array(a).fill(0)

  for (let r = 0; r < a; r++) {
    const row = grid[r]

    let streak0 = 0
    for (let i = a-1; i >= 0; i--) {
      if (row[i] !== 0) break
      streak0++
    }
    
    zeroCounts[r] = streak0
  }

  let res = 0
  for (let i = 0; i < a; i++) {
    const nextTarget = a-1-i

    for (let j = i; j < a; j++) {
      if (zeroCounts[j] >= nextTarget) {
        while (j > i) {
          [zeroCounts[j], zeroCounts[j-1]] = [zeroCounts[j-1], zeroCounts[j]]
          res++
          j--
        }
        break
      }
    }

    if (zeroCounts[i] < nextTarget) return -1
  }

  return res
};