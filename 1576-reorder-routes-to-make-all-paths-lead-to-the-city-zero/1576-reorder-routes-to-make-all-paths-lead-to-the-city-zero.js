/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const originAdj = Array.from({ length: n }, () => [])
  const symAdj = Array.from({ length: n }, () => [])

  for (const con of connections) {
    const [from, to] = con
    originAdj[from].push(to)
    symAdj[from].push(to)
    symAdj[to].push(from)
  }

  let res = 0
  const visited = new Set([0])

  dfs(0, visited)

  return res

  function dfs(city, visited) {

    visited.add(city)

    for (const c of symAdj[city]) {
      if (visited.has(c)) continue

      if (originAdj[city].findIndex(i => i == c) != -1) {
        res++
      }
      dfs(c, visited)
    }
  }
};