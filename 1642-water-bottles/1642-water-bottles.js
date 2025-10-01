/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let result = 0
    let emptyBottles = 0

    while (numBottles + emptyBottles >= numExchange) {
        result += numBottles
        emptyBottles += numBottles

        numBottles = ~~(emptyBottles / numExchange)
        emptyBottles -= numBottles * numExchange
    }

    return result + numBottles
};