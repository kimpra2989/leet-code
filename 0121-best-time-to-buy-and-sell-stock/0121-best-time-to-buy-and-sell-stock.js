/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0
  let min = 1e5

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i]

    if (min > price) {
      min = price
      continue
    }

    res = Math.max(res, price - min)
  }

  return res
};