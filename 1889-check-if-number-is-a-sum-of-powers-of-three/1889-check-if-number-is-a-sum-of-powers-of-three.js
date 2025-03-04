/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    return n.toString(3).split('').every(x => x < 2)
};