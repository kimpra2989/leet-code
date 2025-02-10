/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let highest = 0
    let height = 0
    for (const g of gain) {
        height += g
        if (height > highest) highest = height
    }

    return highest
};