/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const prefix = [nums[0]]
    const suffix = [nums.at(-1)]
    for (let i = 1; i < nums.length; i++) {
        prefix.push(prefix.at(-1) * nums[i])
        suffix.push(suffix.at(-1) * nums.at(-(i + 1)))
    }

    const result = [suffix.at(-2)]
    for (let i = 1; i < nums.length - 1; i++) {
        result.push(prefix[i-1] * suffix.at(-(i+2)))
    }
    result.push(prefix.at(-2))

    return result
};