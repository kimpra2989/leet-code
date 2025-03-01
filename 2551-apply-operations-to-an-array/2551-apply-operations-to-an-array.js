/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  const result = []
  let count0 = 0
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num == 0) {
      count0++
      continue
    }

    if (num === nums[i + 1]) {
      nums[i + 1] = 0
      num *= 2
    }    
    result.push(num)
  }

  for (let i = 0; i < count0; i++) result.push(0)

  return result
};