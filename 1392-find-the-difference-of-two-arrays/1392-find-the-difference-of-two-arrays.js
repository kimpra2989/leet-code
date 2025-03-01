/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    
    return [
        Array.from(set1).filter(e => !set2.has(e)),
        Array.from(set2).filter(e => !set1.has(e))
    ]
};