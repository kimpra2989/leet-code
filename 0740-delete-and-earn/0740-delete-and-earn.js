/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    const count = {}
    nums.forEach(num => {
        count[num] = count[num] ? count[num] + 1 : 1
    })

    const set = Array.from(new Set(nums)).sort((a, b) => a - b)
    const memo = []
    for (const value of set) {
        let total
        if (memo?.at(-1)?.value === value - 1) {
            total = Math.max((memo.at(-2)?.total ?? 0) + value * count[value], memo.at(-1).total)
        } else {
            total = (memo.at(-1)?.total ?? 0) + value * count[value]
        }
        memo.push({ value, total })
    }

    return memo.at(-1).total
};