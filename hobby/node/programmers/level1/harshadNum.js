/* eslint-disable require-jsdoc */
function solution(x) {
  const getArr = (x, acc = []) => {
    if (x == 0) return acc;
    acc.push(x % 10);
    return getArr(Math.floor(x / 10), acc);
  };

  return x % getArr(x).reduce((acc, value) => acc + value) === 0;
}

const testCase = [];
testCase.push({
  x: 18,
});
testCase.push({
  x: 10,
});
testCase.push({
  x: 12,
});
testCase.push({
  x: 11,
});
testCase.push({
  x: 13,
});

const runner = () => testCase.forEach(({x}) => {
  console.log(solution(x));
});

module.exports = runner;
