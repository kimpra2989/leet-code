/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const posMap = {}
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    posMap[char] = [...(posMap[char] ?? []), i]
  }

  const pos = Object.values(posMap).map((ps, i) => ps.length !== 1 ? [ps[0], ps.at(-1)] : ps)
    .sort((a, b) => a[0] - b[0])

  const res = []
  let start = 0
  let end = 0
  for (const p of pos) {
    if (p.length <= 1) { // 한 번만 나온 문자
      if (p[0] > end) {
        res.push(end - start + 1)
        start = p[0]
        end = p[0]
      }
    } else { // 여러번 나온 문자
      if (p[0] > end) {
        res.push(end - start + 1)
        start = p[0]
        end = p[1]
      } else {
        if (p[1] > end) {
          end = p[1]
        }
      }
    }
  }
  res.push(end - start + 1)

  return res
};