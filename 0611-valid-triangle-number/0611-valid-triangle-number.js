/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  let result = 0
  nums.sort((a, b) => a - b)

  for (let i = 0; i + 2 < nums.length; i++) {
    const first = nums[i]
    for (let j = i + 1; j + 1 < nums.length; j++) {
      const second = nums[j]
      for (let k = j + 1; k < nums.length; k++) {
        const third = nums[k]

        if (first + second <= third) break

        result++
      }
    }
  }

  return result
};