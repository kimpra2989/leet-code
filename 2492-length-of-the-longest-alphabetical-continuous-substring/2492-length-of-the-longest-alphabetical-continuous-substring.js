/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const alhash = {}
    for (let i = 0; i < alphabets.length; i++) {
        alhash[alphabets[i]] = i
    }

    let result = 1
    let streak = 1
    let prev = -2
    for (const c of s) {
        const idx = alhash[c]
        if (idx - 1 == prev) {
            streak++
            if (streak > result) result = streak
        } else {
            streak = 1
        }
        prev = idx
    }

    return result
};