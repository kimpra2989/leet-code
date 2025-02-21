/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const rows = {}
    for (const row of grid) {
        const key = JSON.stringify(row)
        rows[key] = rows[key] ? rows[key] + 1 : 1
    }

    // grid T
    const gridT = Array.from({ length: grid.length }, () => Array(grid.length).fill(0));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            gridT[j][i] = grid[i][j];
        }
    }

    const cols = {}
    for (const col of gridT) {
        const key = JSON.stringify(col)
        cols[key] = cols[key] ? cols[key] + 1 : 1
    }

    let result = 0
    for (const key in rows) {
        if (cols[key]) {
            result += rows[key] * cols[key]
        }
    }

    return result;
}
