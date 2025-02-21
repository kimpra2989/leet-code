/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const dp = [0, 1, 1]

  for (let i = 3 ; i <= n ; i++) {
    dp.push(dp.at(-3) + dp.at(-2) + dp.at(-1))
  }
  
  return dp[n]
};