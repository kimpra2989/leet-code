/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const result = []
    for (let i = 0; i <= n; i++) {
        result.push(count1(i))
    }
    return result
};

function count1(num) {
    let count = 0
    while (num) {
        num &= num - 1
        count++
    }
    return count
}