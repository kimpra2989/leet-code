/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    const obj1 = toCharCounter(word1)
    const obj2 = toCharCounter(word2)

    return hasSameKeys(obj1, obj2) && hasSameCounts(obj1, obj2)
};

function toCharCounter(word) {
    const result = {}
    for (const char of word) {
        result[char] = result[char] ? result[char] + 1 : 1
    }

    return result
}

function hasSameKeys(obj1, obj2) {
    const sortedKeys = obj => Object.keys(obj).slice().sort()

    return JSON.stringify(sortedKeys(obj1)) == JSON.stringify(sortedKeys(obj2))
}

function hasSameCounts(obj1, obj2) {
    const sortedValues = obj => Object.values(obj).slice().sort()

    return JSON.stringify(sortedValues(obj1)) == JSON.stringify(sortedValues(obj2))
}

