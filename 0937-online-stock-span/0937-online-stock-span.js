
var StockSpanner = function () {
  this.prices = []
  this.idxStack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.prices.push(price)

  while (
    this.idxStack.length > 0 &&
    price >= this.prices[this.idxStack.at(-1)]
  ) this.idxStack.pop()

  const idx = this.prices.length - 1
  this.idxStack.push(idx)

  return this.idxStack.at(-1) - (this.idxStack.at(-2) ?? -1)
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */