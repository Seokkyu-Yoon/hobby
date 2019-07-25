/* eslint-disable require-jsdoc */
const MOD = 1234567;
const PRIMES = [];
const NOT_PRIMES = [];
for (let i = 2; i <= 2000; i++) {
  if (NOT_PRIMES.includes(i)) continue;
  PRIMES.push({
    value: i,
    count: 0,
  });
  for (let factor = 2; factor * i <= 2000; factor++) {
    NOT_PRIMES.push(i * factor);
  }
}

const getComb = (n, r) => {
  const primes = JSON.parse(JSON.stringify(PRIMES));
  for (let i = Math.min(n - r, r); i > 0; i--) {
    let numerator = n - i + 1;
    while (numerator > 1) {
      const obj = primes.find(({value}) => numerator % value === 0);
      obj.count += 1;
      numerator /= obj.value;
    }
    let denominator = i;
    while (denominator > 1) {
      const obj = primes.find(({value}) => denominator % value === 0);
      obj.count -= 1;
      denominator /= obj.value;
    }
  }
  return primes
      .filter(({count}) => count > 0)
      .reduce((total, {value, count}) => {
        for (let i = 0; i < count; i++) {
          total = (total * value) % MOD;
        }
        return total;
      }, 1);
};

function solution(n) {
  let result = 0;
  for (let steps = 0; steps <= parseInt(n / 2); steps++) {
    result = (result + getComb(n-steps, steps) % MOD) % MOD;
  }
  return result % MOD;
}

const testCase = [];
testCase.push({
  n: 6,
  result: 13,
});
testCase.push({
  n: 5,
  result: 8,
});
testCase.push({
  n: 4,
  result: 5,
});
testCase.push({
  n: 3,
  result: 3,
});
testCase.push({
  n: 2,
  result: 2,
});
testCase.push({
  n: 1,
  result: 1,
});
testCase.push({
  n: 2000,
  result: 694725,
});

const runner = () => testCase.forEach(({n, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
