
var RecentCounter = function() {
    this.q = {}
    this.head = 1
    this.tail = 1
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.q[this.tail] = t
    this.tail++

    while (this.q[this.head] < t - 3000) {
        this.head++
    }
    return this.tail - this.head
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */