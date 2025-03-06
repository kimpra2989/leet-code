/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const hit = new Array(grid.length ** 2 + 1).fill(0)

    for (const r of grid) {
        for (const c of r) {
            hit[c] += 1
        }
    }

    const result = [0, 0]
    for (let i = 1; i < hit.length; i++) {
        const x = hit[i]
        if (x == 0) result[1] = i
        if (x == 2) result[0] = i
    }
    return result 
};