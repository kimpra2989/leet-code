/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function (candiesCount, queries) {
  const prefix = []
  for (const candy of candiesCount) {
    prefix.push((prefix.at(-1) ?? 0) + candy)
  }

  const result = []
  for (const [type, day, cap] of queries) {
    const short = day + 1
    const long = cap * (day + 1)

    result.push(short <= prefix[type] && (prefix[type - 1] ?? 0) + 1 <= long)
  }

  return result
};