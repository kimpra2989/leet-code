/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    const nums = [0, 0]
    // 2
    for (let i = 2; i <= n; i += 2) {
        nums[0] += divideCount(i, 2)
    }
    // 5
    for (let i = 5; i <= n; i += 5) {
        nums[1] += divideCount(i, 5)
    }
    return Math.min(...nums)
};

function divideCount(num, divider) {
    let count = 0
    while (num % divider == 0) {
        count++
        num = num / divider
    }
    return count
}