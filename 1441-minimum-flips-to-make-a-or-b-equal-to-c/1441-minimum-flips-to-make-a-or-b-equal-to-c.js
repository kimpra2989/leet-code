/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
    const top = Math.max(a, b, c).toString(2).length
    
    let count = 0
    for (let i = 0; i < top; i++) {
        const [bitA, bitB, bitC] = [a, b, c].map(x => (x >> i) & 1)
        if ((bitA | bitB) == bitC) continue

        if (bitC == 0) {
            count += bitA + bitB
        } else {
            count++
        }
    }

    return count
};