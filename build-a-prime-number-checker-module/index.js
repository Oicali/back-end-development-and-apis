function isPrime(num) {
  if (num < 2) return false; // 0, 1, and negatives are not prime

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // found a divisor → not prime
  }

  return true; // no divisors found → prime
}

module.exports = {
  isPrime: isPrime
};

