/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true

    let count = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            (!flowerbed[i - 1] || flowerbed[i - 1] == 0) &&
            flowerbed[i] == 0 &&
            (!flowerbed[i + 1] || flowerbed[i + 1] == 0)
        ) {
            flowerbed[i] = 1
            if (++count >= n) return true
        }
    }
    return false
};