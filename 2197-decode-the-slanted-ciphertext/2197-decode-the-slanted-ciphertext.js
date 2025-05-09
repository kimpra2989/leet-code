/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
  const cols = encodedText.length / rows

  let res = ''
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const idx = r * cols + r + c

      if (idx >= encodedText.length) {
        break
      }
      res += encodedText[idx]
    }
  }

  return res.trimRight()
};