/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let left = 0
  let right = 0
  for (const num of nums.slice(1)) {
    right += num
  }

  let idx = 0
  do {
    if (left === right) return idx
    left += nums[idx]
    right -= nums[idx + 1]
    idx++
  } while (idx < nums.length)

  return -1
};