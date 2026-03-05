/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  const bits = ['0', '1']

  let diff = 0
  for (let i = 0; i < s.length; i++) {
    const bit = s[i]

    if (bit !== bits[i % 2]) diff++
  }

  return Math.min(diff, s.length - diff)
};