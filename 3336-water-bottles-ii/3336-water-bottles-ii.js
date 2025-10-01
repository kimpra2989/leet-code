/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
  let result = numBottles

  while (numBottles >= numExchange) {
    numBottles -= numExchange 
    numBottles++
    numExchange++
    result++
  }

  return result
};