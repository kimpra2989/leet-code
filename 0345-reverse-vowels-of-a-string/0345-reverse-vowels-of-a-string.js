/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowel = 'aeiou'
  const vowels = new Set([...vowel.split(''), ...vowel.toUpperCase().split('')])

  const targetIdx = []
  s.split('').forEach((c, i) => {
    if (vowels.has(c)) targetIdx.push(i)
  })

  const words = s.split('')
  if (targetIdx.length > 1) {
    for (let i = 0; i < Math.floor(targetIdx.length / 2); i++) {
      const front = targetIdx[i]
      const rear = targetIdx.at(-(1 + i))

      let temp = words[front]
      words[front] = words[rear]
      words[rear] = temp
    }
  }

  return words.join('')
};