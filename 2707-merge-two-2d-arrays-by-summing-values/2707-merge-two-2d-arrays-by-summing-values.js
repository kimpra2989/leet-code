/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let i = 0
  let j = 0
  const result = []
  while (i < nums1.length || j < nums2.length) {
    const [id1, val1] = nums1[i] ?? [10e3, 0]
    const [id2, val2] = nums2[j] ?? [10e3, 0]

    if (id1 > id2) {
      result.push([id2, val2])
      j++
    } else if (id1 < id2) {
      result.push([id1, val1])
      i++
    } else {
      result.push([id1, val1 + val2])
      i++
      j++
    }
  }

  return result
};