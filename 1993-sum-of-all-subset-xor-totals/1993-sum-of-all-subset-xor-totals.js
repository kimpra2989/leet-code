/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let res = 0
  dfs(-1, 0, 0)
  return res

  function dfs(start, total) {
    res += total
    for (let i = start + 1; i < nums.length; i++) {
      dfs(i, total ^ nums[i])
    }
  }
};