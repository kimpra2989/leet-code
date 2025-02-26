/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  if (nums.length == 1) return Math.abs(nums[0])

  const first = nums[0]

  // 양수 최대
  let plus = Math.max(0, first)
  let sum = plus
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const next = sum + nums[i]
    
    sum = Math.max(0, next)
    if (sum > plus) plus = sum
  }

  // 음수 최대
  let minus = Math.min(0, first)
  sum = Math.min(0, first)
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const next = sum + nums[i]
    
    sum = Math.min(0, next)
    if (sum < minus) minus = sum
  }

  return Math.max(plus, -minus)
};
