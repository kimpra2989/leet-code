/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    const dp = Array(questions.length).fill(0)

    for (let i = questions.length - 1; i >= 0; i--) {
        const [point, power] = questions[i]

        dp[i] = Math.max(dp[i + 1] ?? 0, (dp[i + 1 + power] ?? 0) + point)
    }

    return dp[0]
};