/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  const seen = new Map() // rain : idx
  let zeros = [] // idxes
  const res = Array.from({ length: rains.length }, (_, i) => rains[i] === 0 ? 1 : -1)

  for (let i = 0; i < rains.length; i++) {
    const rain = rains[i]

    if (rain === 0) {
      zeros.push(i)
      continue
    }

    if (!seen.has(rain)) {
      seen.set(rain, i)
      continue
    }

    // 이하 중복인 경우
    if (zeros.length === 0) {
      return []
    }

    // 중복된 rain의 이전 idx 이후의 0 찾기
    const prevZeroCount = zeros.length
    for (let j = 0; j < zeros.length; j++) {
      const zero = zeros[j]
      const prevRainIdx = seen.get(rain)
      if (prevRainIdx < zero) {
        res[zero] = rain
        zeros.splice(j, 1)
        seen.set(rain, i)
        break
      }
    }

    if (zeros.length === prevZeroCount) {
      return []
    }
  }

  return res
}