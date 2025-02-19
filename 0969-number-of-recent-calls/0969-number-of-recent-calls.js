
var RecentCounter = function() {
    this.req = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.req.push(t)
    let count = 1
    for (let i = this.req.length - 2; i >= 0; i--) {
        if (this.req[i] < t - 3000) break
        count++
    }
    return count
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */