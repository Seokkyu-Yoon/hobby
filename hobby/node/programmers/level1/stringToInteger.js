/* eslint-disable require-jsdoc */
function solution(s) {
  return parseInt(s);
}

const testCase = [];
testCase.push({
  s: '+1',
});

const runner = () => testCase.forEach(({s}) => {
  console.log(solution(s));
});

module.exports = runner;
