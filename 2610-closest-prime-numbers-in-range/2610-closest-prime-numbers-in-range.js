/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  // find primes in tange
  const primes = []
  for (let i = left; i <= right; i++) {
    if (i >= 3) {
      let isPrime = true
      for (let j = 2; j <= Math.floor(i ** (1 / 2)); j++) {
        if (i % j == 0) {
          isPrime = false
          break
        }
      }
      if (isPrime) primes.push(i)
    } else {
      if (i == 2) primes.push(2)
    }
  }

  // find min gap of primes
  if (primes.length < 2) return [-1, -1]

  let min = right - left + 1
  let result = []
  for (let i = 0; i + 1 < primes.length; i++) {
    const gap = primes[i + 1] - primes[i]
    if (gap < min) {
      min = gap
      result = [primes[i], primes[i + 1]]
    }
  }
  return result
};