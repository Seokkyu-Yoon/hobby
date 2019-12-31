/* eslint-disable require-jsdoc */
function solution(n) {
  const getArray = (n, acc = []) => {
    if (n == 0) return acc;
    acc.push(n % 10);
    return getArray(Math.floor(n / 10), acc);
  };

  return Number(getArray(n).sort().reverse().join(''));
}

const testCase = [];
testCase.push({
  n: 118372,
});
testCase.push({
  n: 123456789,
});

const runner = () => testCase.forEach(({n}) => {
  console.log(solution(n));
});

module.exports = runner;
