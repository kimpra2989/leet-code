/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const arr = matrix.flat()

  if (arr.length === 1) return target == matrix[0]

  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    const mid = ~~((start + end) / 2)
    const value = arr[mid]
    if (value == target) return true
    else if (value > target) end = mid - 1
    else start = mid + 1
  }

  return false
};