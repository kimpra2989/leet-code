/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  let min = 0
  let minIdx = customers.length
  for (const s of customers) {
    if (s === 'N') min++
  }

  let temp = min
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i] == 'N') {
      temp--
      if (temp <= min) {
        min = temp
        minIdx = i
      }
    } else {
      temp++
    }
  }

  return minIdx
};