/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    while (idx = findIdx(s, part)) {
        s = s.slice(0, idx) + s.slice(idx + part.length)
    }

    return s
};

function findIdx(s, part) {
    for (i = 0; i <= s.length - part.length; i++) {
        const target = s.slice(i, i + part.length)
        if (target === part) return i
    }
}