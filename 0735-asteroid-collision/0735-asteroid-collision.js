/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = []

  for (const asteroid of asteroids) {
    if (
      !stack.length ||
      asteroid > 0 ||
      stack.at(-1) < 0 && asteroid < 0
    ) {
      stack.push(asteroid)
      continue
    }

    let top = stack.at(-1)
    if (top + asteroid > 0) continue

    while (top + asteroid <= 0) {
      stack.pop()
      if (top + asteroid == 0) break

      top = stack.at(-1)
      if (top < 0) {
        stack.push(asteroid)
        break
      }
    }
  }

  return stack
};