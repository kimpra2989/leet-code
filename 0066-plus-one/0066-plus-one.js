/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    if (digits.every(d => d === 9)) return [1, ...Array(digits.length).fill(0)]

    digits[digits.length - 1] += 1
    digits.reverse()

    let digit = 0
    while (digits[digit] === 10) {
        digits[digit] = 0
        digits[digit + 1] += 1
        digit++
    }

    return digits.reverse()
};