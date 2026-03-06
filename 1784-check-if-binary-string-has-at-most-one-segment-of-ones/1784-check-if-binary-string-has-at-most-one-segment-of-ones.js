/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  let i = 0
  while (s[i] == 1) i++
  while (s[i] == 0) i++
  
  return i >= s.length
};