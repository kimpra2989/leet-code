/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const paths = Array.from({ length: numCourses }, () => [])
  const checked = new Array(numCourses).fill(false)

  for (const [end, start] of prerequisites) {
    paths[start].push(end)
  }

  const trace = []
  for (let i = 0; i < numCourses; i++) {
    if (checked[i] === false) {
      trace.push(i)
      if (dfs(i) === false) {
        return false
      }
      trace.pop()
    }
  }
  return true

  function dfs(current) {
    if (checked[current]) return true

    const vs = paths[current]
    checked[current] = true

    for (const v of vs) {
      if (trace.indexOf(v) !== -1) {
        return false
      }

      trace.push(v)

      if (dfs(v) === false) return false
      trace.pop()
    }

    return true
  }

  return false
};