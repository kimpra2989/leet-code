/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const checked = Array.from({ length: mat.length }, () => new Array(mat[0].length).fill(false))

  let res = 0
  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[0].length; c++) {
      if (checked[r][c] === false) {

        if (mat[r][c] === 1) {
          processCheck(r, c)
          let special = true
          for (let ir = 0; ir < mat.length; ir++) {
            if (mat[ir][c] === 1 && ir != r) {
              special = false
              break
            }
          }

          if (special) {
            for (let ic = 0; ic < mat[0].length; ic++) {
              if (mat[r][ic] === 1 && ic != c) {
                special = false
                break
              }
            }
          }

          if (special) res++
          break
        }
      }
    }
  }

  return res

  function processCheck(r, c) {
    for (let ir = r + 1; ir < mat.length; ir++) {
      checked[ir][c] = true
    }

    for (let ic = c + 1; ic < mat[0].length; ic++) {
      checked[r][ic] = true
    }
  }
};