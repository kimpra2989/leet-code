/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const dp = cost.slice(0, 2)
    let idx = 2
    while (idx < cost.length) {
        dp.push(Math.min(dp[idx - 2], dp[idx - 1]) + cost[idx])
        idx++
    }

    return Math.min(...dp.slice(-2))
};