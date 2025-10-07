/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const parsedPath = parsePath(path)

  res = []
  for (const name of parsedPath) {
    if (name === '.') continue
    else if (name === '..') res.pop()
    else res.push(name)
  }

  return '/' + res.join('/')
};

function parsePath (path) {
  // 연속된 '/' 제거
  let res = ''
  for (let i = 0; i < path.length - 1; i++) {
    if (path[i] === '/' && path[i+1] === '/') continue

    res += path[i]
  }

  if (path.at(-1) !== '/') res += path.at(-1)

  return res.slice(1).split('/')
}