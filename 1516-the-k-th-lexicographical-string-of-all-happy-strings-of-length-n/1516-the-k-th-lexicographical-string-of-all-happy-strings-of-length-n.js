/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    const letters = ['a', 'b', 'c']

    let count = 0
    return dfs('', 0) ?? ''

    function dfs(letter, depth) {
        if (depth > 0 && letter.at(-1) === letter.at(-2)) return
        if (depth >= n) {
            count++
            if (count === k) {
                return letter
            }
            return
        }

        for (const l of letters) {
            const res = dfs(letter + l, depth + 1)
            if (res) return res
        }
    }

};