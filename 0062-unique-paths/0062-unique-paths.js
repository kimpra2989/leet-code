/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const map = []
    for (let r = 1; r <= m; r++) {
        const row = new Array(n).fill(0)
        map.push(row)
    }

    map[0][0] = 1

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (r == 0 && c == 0) continue
            map[r][c] = (map[r][c - 1] ?? 0) + (map[r - 1]?.[c] ?? 0)
        }
    }
    return map.at(-1).at(-1)
};