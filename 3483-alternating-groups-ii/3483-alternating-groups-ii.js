/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
  const len = colors.length
  // 연속으로 같은 색이 나오는 idx를 찾는다.
  colors.push(colors[0])

  let prev = -1
  const sameIdxs = []
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i]
    if (prev == color) sameIdxs.push(i)
    prev = color
  }

  // k보다 짧은 idx 중에 2회차에 만날 수도 있으니 추가해준다.
  for (const sameIdx of sameIdxs) {
    if (sameIdx < k) {
      sameIdxs.push(sameIdx + len)
    } else break
  }

  // window k에 대해서 samesIdx가 window의 범위 내에 없는 경우에만 추가
  let result = 0
  let start = 0
  for (const sameIdx of sameIdxs) {
    if (start + k - 1 < sameIdx) {
      result += sameIdx - (start + k - 1)
    }
    start = Math.min(sameIdx, len)
  }
  result += len - start
  return result
};