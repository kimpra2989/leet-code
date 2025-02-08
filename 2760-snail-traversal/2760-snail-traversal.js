/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return []

    const parts = []
    for (let c = 0; c < colsCount; c++) {
        const part = this.slice(rowsCount * c, rowsCount * (c + 1))
        if (c % 2 == 1) part.reverse()
        parts.push(part)
    }

    const result = []
    for (let i = 0; i < parts[0].length; i++) {
        const arr = []
        for (const p of parts) {
            arr.push(p[i])
        }
        result.push(arr)
    }

    return result
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */