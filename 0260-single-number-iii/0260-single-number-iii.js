/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const hash = {}

    for (const num of nums) {
        if (hash[num]) delete hash[num]
        else hash[num] = true
    }

    return Object.keys(hash).map(Number)
};