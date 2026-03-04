/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  const res = new Array(heights.length).fill(0)

  const mStack = []

  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i]

    let count = 0
    for (let j = mStack.length-1; j >= 0; j--) {
      const nextHeight = mStack[j]

      count++
      if (nextHeight >= height) break      
    }
    res[i] = count

    while (mStack.length > 0 && mStack.at(-1) < height) {
      mStack.pop()
    }
    mStack.push(height)
  }

  return res
};