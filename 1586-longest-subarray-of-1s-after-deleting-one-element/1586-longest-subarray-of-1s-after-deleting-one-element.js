/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const chunks = 
        nums.join('')
            .split('0')
            .map(chunk => chunk.length)

    if (chunks.length == 1) return chunks[0] - 1

    let result = 0
    for (let i = 0; i < chunks.length - 1; i++) {
        const [a, b] = chunks.slice(i, i+2)
        const sub = a + b
        if (sub > result) result = sub
    }

    return result
};