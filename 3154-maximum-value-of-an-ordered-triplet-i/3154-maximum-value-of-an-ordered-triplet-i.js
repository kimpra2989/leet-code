/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
  const len = nums.length
  let res = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        res = Math.max((nums[i] - nums[j]) * nums[k], res)
      }
    }
  }

  return res
};