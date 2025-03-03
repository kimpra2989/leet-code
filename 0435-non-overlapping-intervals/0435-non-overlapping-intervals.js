/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] != b[0]) return a[0] < b[0] ? -1 : 1
        return a[1] < b[1] ? -1 : 1
    })
    console.log(intervals)
    
    let left = intervals[0][0]
    let right = intervals[0][1]
    let result = 0
    for (const [start, end] of intervals.slice(1)) {
        // 다음 값의 시작점이 끝점 이전에 오는 경우
        if (start < right) {
            if (end <= right) {
                left = start
                right = end
            }
            result++
        // 안 겹치는 경우
        } else {
            left = start
            right = end
        }
    }
    return result
};