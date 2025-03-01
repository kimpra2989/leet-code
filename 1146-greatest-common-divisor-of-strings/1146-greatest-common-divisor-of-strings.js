/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let short, long
  if (str1.length > str2.length) {
    long = str1
    short = str2
  } else {
    long = str2
    short = str1
  }

  let result = ''
  for (let i = 1; i <= short.length; i++) {
    const s = short.slice(0, i)

    if (
      long.length % s.length != 0 ||
      short.length % s.length != 0
    ) continue

    if (
      long === s.repeat(long.length / s.length) &&
      short === s.repeat(short.length / s.length)
    ) result = s
  }

  return result
};