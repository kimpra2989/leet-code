/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  const cur = []
  dfs(1, 1)
  return res

  function dfs(start) {
    if (cur.length >= k) {
      res.push(cur.slice())
      return
    }

    for (let i = start; i <= n; i++) {
      cur.push(i)
      dfs(i + 1)
      cur.pop()
    }
  }
};