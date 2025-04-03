/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  const prefix_max = []
  const suffix_max = []

  let head_max = 0
  let tail_max = 0
  for (let i = 0; i < nums.length; i++) {
    head_max = Math.max(head_max, nums[i])
    tail_max = Math.max(tail_max, nums.at(-i - 1))
    prefix_max.push(head_max)
    suffix_max.push(tail_max)
  }
  suffix_max.reverse()

  const len = nums.length
  let res = 0
  for (let j = 1; j < nums.length - 1; j++) {
    res = Math.max((prefix_max[j - 1] - nums[j]) * suffix_max[j + 1], res)
  }

  return res
};