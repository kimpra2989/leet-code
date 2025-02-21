/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length == 0) return true

    let idx = 0
    for (const c of t) {
        if (s[idx] === c) {
            idx++
            if (idx >= s.length) return true
        }
    }
    return false
};