/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0

  let res = 0
  let pos = 0
  while (pos < nums.length - 1) {
    res++
    const jumpReach = nums[pos]

    if (pos + jumpReach >= nums.length -1) break

    const nextJumpTargets = nums.slice(pos + 1, pos + jumpReach + 1)
    
    let maxReach = 0
    let maxReachIdx = 0
    for (let i = 0; i < nextJumpTargets.length; i++) {
      if (maxReach <= i + nextJumpTargets[i]) {
        maxReach = nextJumpTargets[i] + i
        maxReachIdx = i
      }
    }

    pos += maxReachIdx + 1
  }

  return res
};