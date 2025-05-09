/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const shown = new Set()
  let digits = String(n).split('').map(Number)

  while (true) {
    let sum = 0
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i] ** 2
    }

    if (sum === 1) return true

    if (shown.has(sum)) return false

    shown.add(sum)

    digits = String(sum).split('').map(Number)
  }
};