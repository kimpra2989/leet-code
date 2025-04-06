/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b)

  const dp = Array.from({ length: nums.length }, (_, i) => [nums[i]])
  let res = []
  for (let i = nums.length - 1; i >= 0; i--) {
    let maxArr = []
    for (let j = i + 1; j < nums.length; j++) {
      if(nums[j] % nums[i] == 0 && dp[j].length > maxArr.length) {
        maxArr = dp[j].slice()
      }
    }

    dp[i] = [nums[i], ...maxArr]
    if (dp[i].length > res.length) res = dp[i]
  }

  return res
};