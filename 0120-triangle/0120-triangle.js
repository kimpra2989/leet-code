/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dp = [triangle[0]]
    for (let i = 1 ; i < triangle.length ; i++) {
        const line = triangle[i]
        const lineSum = []
        const prevSum = dp[i-1]
        for (let j = 0 ; j < line.length ; j++) {
            const bigger = Math.min(prevSum[j - 1] ?? 10e4, prevSum[j] ?? 10e4)
            lineSum.push(bigger + line[j])
        }
        dp.push(lineSum)
    }
    return Math.min(...dp.at(-1))
};