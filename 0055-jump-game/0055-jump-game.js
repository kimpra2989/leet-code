/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = nums[0]
  let cur = 1
  const len = nums.length - 1

  if (max >= len) return true

  while (max < len && cur <= max) {
    max = Math.max(max, cur + nums[cur])

    if (max >= len) return true

    cur++
  }

  return false
};