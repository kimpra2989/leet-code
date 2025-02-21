/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    const store = {}

    let count = 0
    for (const num of nums) {
        if (num >= k) continue

        if (store[k - num] > 0) {
            count++
            store[k - num] -= 1
        } else {
            store[num] = store[num] ? store[num] + 1 : 1
        }
    }
    return count
};