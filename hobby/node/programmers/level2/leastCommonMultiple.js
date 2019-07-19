/* eslint-disable require-jsdoc */
const getPrimes = (n) => {
  const primes = [];
  const notPrimes = [];
  for (let num = 2; num <= n; num++) {
    if (notPrimes.includes(num)) continue;
    primes.push(num);
    for (let i = 2; num * i <= n; i++) {
      notPrimes.push(num * i);
    }
  }
  return primes;
};

const valueIsOne = (value) => value === 1;
const solution = (arr) => {
  arr.sort((a, b) => a - b);
  const size = arr.length;
  const maximum = arr.pop();
  arr.push(maximum);
  const primes = getPrimes(maximum);
  let result = 1;
  let primeIndex = 0;
  while (arr.filter(valueIsOne).length < size) {
    const prime = primes[primeIndex];
    const canDevideSomething = arr.some((value) => value % prime === 0);
    if (canDevideSomething) {
      result *= prime;
      arr = arr.map((value) => {
        if (value % prime) return value;
        return parseInt(value / prime);
      });
    } else {
      primeIndex += 1;
    }
  }
  return result;
};

const testCase = [];
testCase.push({
  arr: [2, 6, 8, 14],
  result: 168,
});
testCase.push({
  arr: [1, 2, 3],
  result: 6,
});

const runner = () => testCase.forEach(({arr, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(arr);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
