/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const res = new Array(n).fill(0)

  const q = []
  let prevT = 0
  logs.forEach(log => {
    const [fn, status, t] = log.split(':')

    if (status === 'start') {
      if (q.length > 0) {
        const prevFn = q.at(-1)
        res[prevFn] += t - prevT
      }

      q.push(fn)
      prevT = t
    } else if (status === 'end') {
      q.pop()
      res[fn] += t - prevT + 1

      prevT = +t + 1
    }
  })

  return res
};