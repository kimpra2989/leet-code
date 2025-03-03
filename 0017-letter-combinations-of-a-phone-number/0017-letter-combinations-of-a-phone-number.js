/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return []

    const result = []
    dfs('')
    function dfs (str) {
        if (str.length >= digits.length) {
            result.push(str)
            return 
        }

        for (const c of letters(digits[str.length])) {
            dfs(str + c)
        }
    }
    return result
};

function* letters(num) {
    const start = 97 + 3 * (num - 2) + +(num >= 8)
    for (let i = start; i < start + 3; i++) {
        yield String.fromCharCode(i)
    }
    if (num == 7) yield 's'
    if (num == 9) yield 'z'
}