/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1])

    let result = 1
    let left = points[0][1]
    for (let i = 1; i < points.length; i++) {
        const [start, end] = points[i]
        if (start <= left) continue
        else {
            result++
            left = end
        }
    }
    return result
};