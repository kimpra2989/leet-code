/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  const robots = []
  for (let i = 0; i < positions.length; i++) {
    const robot = [
      i,
      healths[i],
      directions[i]
    ]
    robots.push(robot)
  }

  robots.sort((a, b) => positions[a[0]] - positions[b[0]])

  const stack = []
  for (let i = 0; i < robots.length; i++) {
    const robot = robots[i]

    if (!stack.length) {
      stack.push(robot)
      continue
    }

    const top = stack.at(-1)
    let [_, hp, dir] = robot

    if (dir == 'R' || top[2] == 'L') {
      stack.push(robot)
    } else if (top[1] == hp) {
      stack.pop()
    } else if (top[1] < hp) {
      stack.pop()
      i--
      robot[1]--
    } else if (top[1] > hp) {
      top[1]--
    }
  }

  stack.sort((a, b) => a[0] - b[0])

  return stack.map(s => s[1])
};