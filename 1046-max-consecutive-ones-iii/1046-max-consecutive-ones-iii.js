/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let start = 0
  let end = 0
  let sum = nums[0]
  let result = nums[0]
  while (start < nums.length && end < nums.length) {
    const len = end - start + 1
    if (sum >= len - k) {
      if (len > result) result = len
      end++
      sum += nums[end]
    } else {
      sum -= nums[start]
      start++
      if (start > end) {
        sum = nums[start]
        end = start
      }
    }
    console.log(start, end, result)
  }

  return result
};