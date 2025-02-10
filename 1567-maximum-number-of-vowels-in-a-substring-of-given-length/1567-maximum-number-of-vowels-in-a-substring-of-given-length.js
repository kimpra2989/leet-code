/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowel = ['a', 'e', 'i', 'o', 'u']

    // initial window    
    const init = s.slice(0, k)
    let count = 0
    for (const char of init) {
        if (vowel.includes(char)) count++
    }
    let result = count

    for (let i = 1; i <= s.length - k; i++) {
        const left = s[i - 1]
        if (vowel.includes(left)) count--

        const right = s[i + k - 1]
        if (vowel.includes(right)) count++

        if (count > result) result = count
    }

    return result
};