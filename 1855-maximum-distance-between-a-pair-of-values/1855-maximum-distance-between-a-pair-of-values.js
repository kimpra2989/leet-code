/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let res = 0;

  const minLen = Math.min(nums1.length, nums2.length)
  let n2i = 0
  for (let i = 0; i < minLen; i++) {
    const n1 = nums1[i]

    if (n2i < i) n2i = i

    while (n1 <= nums2[n2i]) {
      n2i++
    }

    if (n2i >= nums2.length) {
      return Math.max(res, nums2.length-1 - i)
    }

    res = Math.max(res, n2i-1 - i)
  }

  return res
};