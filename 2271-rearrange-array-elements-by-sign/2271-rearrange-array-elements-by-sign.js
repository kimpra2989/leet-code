/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  const plus = []
  const minus = []

  nums.forEach(num => {
    if (num > 0) plus.push(num)
    else minus.push(num)
  })

  const result = []
  for (let i = 0; i < plus.length; i++) {
    result.push(plus[i], minus[i])
  }

  return result
};