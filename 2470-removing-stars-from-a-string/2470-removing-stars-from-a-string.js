/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = []

    for (const c of s) {
        if (c == '*') {
            stack.pop()
            continue
        }
        stack.push(c)
    }
    return stack.join('')
};