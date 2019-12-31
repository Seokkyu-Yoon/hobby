/* eslint-disable require-jsdoc */
function solution(n) {
  return Math.sqrt(n) !== Math.floor(Math.sqrt(n)) ?
  -1 :
  Math.pow(Math.sqrt(n) + 1, 2);
}

const testCase = [];
testCase.push({
  n: 121,
});
testCase.push({
  n: 3,
});

const runner = () => testCase.forEach(({n}) => {
  console.log(solution(n));
});

module.exports = runner;
