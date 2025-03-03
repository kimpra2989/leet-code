/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const low = []
    const high = []
    let equal = 0

    nums.forEach(num => {
      if (num < pivot) low.push(num)
      else if (num > pivot) high.push(num)
      else equal++
    })
    
    return low.concat(new Array(equal).fill(pivot), high)
};