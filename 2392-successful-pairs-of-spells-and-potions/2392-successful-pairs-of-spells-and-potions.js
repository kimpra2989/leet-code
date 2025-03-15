/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b)
  
  const res = []
  for (const spell of spells) {
    let low = 0
    let high = potions.length - 1
    const target = Math.ceil(success / spell)
    let ltIdx = potions.length
    
    while (low <= high) {
      const mid = Math.ceil((low + high) / 2)
      if (potions[mid] < target) {
        low = mid + 1
      } else {
        if (mid == 0) {
          ltIdx = 0
          break
        }
        if (potions[mid - 1] < target) {
          ltIdx = mid
          break
        }
        high = mid - 1
      }
    }
    res.push(potions.length - ltIdx)
  }

  return res
};