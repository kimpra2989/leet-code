/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  let newNums = []
  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      newNums.push((nums[i] + nums[i+1]) % 10)
    }

    nums = newNums
    newNums = []
  }
  
  return nums[0]
};