/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
    if (nums.lenght < 2) return true

    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] + nums[i + 1]) % 2 == 0) return false
    }
    return true
};