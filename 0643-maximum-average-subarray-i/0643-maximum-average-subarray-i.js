/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let result = sum = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0)
    for (let i = 0; i + k < nums.length; i++) {
        sum += nums[i + k] - nums[i]
        if (sum > result) result = sum
    }

    return result / k
};