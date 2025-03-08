/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let wCount = 0
  for (let i = 0; i < k; i++) {
    if (blocks[i] == 'W') wCount++
  }

  let min = wCount
  for (let i = 0; i + k < blocks.length; i++) {
    if (blocks[i] == 'W') wCount--
    if (blocks[i + k] == 'W') wCount++

    if (wCount < min) min = wCount    
  }

  return min
};