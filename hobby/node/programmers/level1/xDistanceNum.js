/* eslint-disable require-jsdoc */
function solution(x, n) {
  const getArr = (x, n, index = 1, acc = []) => {
    if (index > n) return acc;
    acc.push(x * index);
    return getArr(x, n, index + 1, acc);
  };

  return getArr(x, n);
}

const testCase = [];
testCase.push({
  x: 2,
  n: 5,
});
testCase.push({
  x: 4,
  n: 3,
});
testCase.push({
  x: -4,
  n: 2,
});
testCase.push({
  x: -10000000,
  n: 1000,
});

const runner = () => testCase.forEach(({x, n}) => {
  console.log(solution(x, n));
});

module.exports = runner;
