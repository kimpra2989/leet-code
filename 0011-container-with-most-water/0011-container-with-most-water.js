/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1

    let result = 0

    while (left <= right) {
        let x = right - left
        let yl = height[left]
        let yr = height[right]

        const area = x * Math.min(yl, yr)
        if (area > result) result = area

        if (yl > yr) right--
        else left++
    }

    return result
};