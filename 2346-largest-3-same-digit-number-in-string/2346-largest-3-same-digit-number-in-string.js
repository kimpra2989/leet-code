/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let streak = 1
  let digit = -1

  for (let i = 1; i < num.length; i++) {
    while (num[i - 1] === num[i]) {
      streak++
      i++
    }

    if (streak >= 3) {
      digit = Math.max(num[i-1], digit)
    }

    streak = 1
  }

  return digit === -1 ? '' : String(digit).repeat(3)
};