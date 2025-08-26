/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let diag = 0
    let area = 0


    for (const [l, w] of dimensions) {
        const newDiag = l ** 2 + w ** 2
        const newArea = l * w

        if (newDiag === diag) {
            area = Math.max(area, newArea)
        } else if (newDiag > diag) {
            diag = newDiag
            area = newArea
        }
    }

    return area
};