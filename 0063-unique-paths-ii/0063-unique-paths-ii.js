/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const dp = []
    const col_len = obstacleGrid[0].length
    const firstRow = new Array(col_len + 1).fill(0)
    dp.push(firstRow)

    for (let r = 1; r <= obstacleGrid.length; r++) {
        const row = [0, ...new Array(obstacleGrid[0].length).fill(0)]
        if (r == 1) row[0] = 1
        for (let c = 1; c <= col_len; c++) {
            if (obstacleGrid[r - 1][c - 1] === 1) continue

            row[c] = row[c - 1] + dp.at(-1)[c]
        }
        dp.push(row)
    }
    return dp.at(-1).at(-1)
};