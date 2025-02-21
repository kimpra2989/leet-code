/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const dict = {}
    for (const ele of arr) {
        dict[ele] = dict[ele] ? dict[ele] + 1 : 1 
    }
    const values  = Object.values(dict)
    return values.length == new Set(values).size
};