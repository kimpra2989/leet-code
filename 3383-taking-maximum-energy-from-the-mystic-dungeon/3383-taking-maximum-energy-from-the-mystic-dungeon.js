/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function (energy, k) {
  const dp = Array(energy.length).fill(-Infinity)

  let res = -Infinity
  for (let i = energy.length - 1; i >= 0; i--) {
    dp[i] = energy[i] + (dp[i+k] ?? 0)
    res = Math.max(res, dp[i])
  }

  return res
};