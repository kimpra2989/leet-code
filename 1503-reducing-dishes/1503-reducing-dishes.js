/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
    satisfaction.sort((a, b) => a - b)

    let not_minus_idx = -1
    for (let i = 0; i < satisfaction.length; i++) {
        if (satisfaction[i] >= 0) {
            not_minus_idx = i
            break
        }
    }

    // all the sats.. are under 0
    if (not_minus_idx == -1) return 0

    let sum = 0
    let time = 1
    for (let i = not_minus_idx; i < satisfaction.length; i++, time++) {
        sum += satisfaction[i] * time
    }

    let unit_sat = 0
    for (let i = not_minus_idx; i < satisfaction.length; i++) {
        unit_sat += satisfaction[i]
    }
    
    let max = sum
    for (let i = not_minus_idx - 1; i >= 0; i--) {
        sum += unit_sat + satisfaction[i]
        unit_sat += satisfaction[i]
        if (sum > max) max = sum
    }

    return max
};