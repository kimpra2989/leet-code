/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    
    const res = []
    const stack = []

    dfs(0, 0, 0, stack)

    return res

    function dfs (depth, sum, start, stack) {
      if (depth >= k) {
        if (sum == n) {
          res.push(stack.slice())
        }
        
        return
      }

      for (let i = start + 1; i < 10; i++) {
        stack.push(i)
        dfs(depth + 1, sum + i, i, stack)
        stack.pop()
      }
    }
};