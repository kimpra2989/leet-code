/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return SSort(s) === SSort(t)
};

function SSort(s) {
  return s.split('').sort().join()
}