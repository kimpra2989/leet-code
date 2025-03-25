/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
  const xs = rectangles.map(rec => [rec[0], rec[2]])
  xs.sort((a, b) => a[0] - b[0])

  let res = 0
  let high = xs[0][1]
  for (let i = 0; i < xs.length - 1; i++) {
    if (xs[i + 1][0] >= high) res++

    high = Math.max(high, xs[i + 1][1])
    if (res >= 2) return true
  }

  const ys = rectangles.map(rec => [rec[1], rec[3]])
  ys.sort((a, b) => a[0] - b[0])

  res = 0
  high = ys[0][1]
  for (let i = 0; i < ys.length - 1; i++) {
    if (ys[i + 1][0] >= high) res++

    high = Math.max(high, ys[i + 1][1])
    if (res >= 2) return true
  }

  return false
};