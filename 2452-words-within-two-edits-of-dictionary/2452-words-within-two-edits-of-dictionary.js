/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  const res = []

  for (const query of queries) {
    for (const word of dictionary) {
      let diff = 0

      let pass = true
      for (let i = 0; i < query.length; i++) {
        if (query[i] !== word[i]) diff++

        if (diff > 2) {
          pass = false
          break
        }
      }

      if (pass) {
        res.push(query)
        break
      }
    }
  }

  return res
};