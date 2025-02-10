/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const hash = {}

    for (const num of nums) {
        if (hash[num]) {
            hash[num] += 1
            if (hash[num] >= 3) {
                delete hash[num]
            }
        }
        else hash[num] = 1
    }

    return +Object.keys(hash)
};