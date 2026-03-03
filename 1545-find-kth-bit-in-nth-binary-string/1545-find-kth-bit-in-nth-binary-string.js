/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  let bs = '0';

  for (let i = 2; i <= n; i++) {
    bs = bs + '1' + reverseInvert(bs)
  }

  return bs[k-1]

  function reverseInvert(bs) {
    let res = ''

    for (let i = bs.length-1; i >= 0; i--) {
      const b = bs[i]

      res += b === '1' ? '0' : '1'
    }

    return res
  }
};