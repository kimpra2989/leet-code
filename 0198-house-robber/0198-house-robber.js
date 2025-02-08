/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length < 3) return Math.max(...nums)

    const memo = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++) {
        memo.push(Math.max(memo[i - 2] + nums[i], memo[i - 1]))
    }

    return memo.at(-1)
};