/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const keys = new Map()
    const res = []

    for (const str of strs) {
      const key = str.split('').sort().join('')
      if (keys.has(key)) {
        res[keys.get(key)].push(str)
      } else {
        keys.set(key, res.length)
        res.push([str])
      }
    }
    return res

};