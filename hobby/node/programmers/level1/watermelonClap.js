/* eslint-disable require-jsdoc */
function solution(n) {
  let answer = '';
  for (let i = 0; i < n; i++) {
    answer = i % 2 == 0 ? `${answer}수` : `${answer}박`;
  }
  return answer;
}

const testCase = [];
testCase.push({
  n: 3,
});
testCase.push({
  n: 4,
});

const runner = () => testCase.forEach(({n}) => {
  console.log(solution(n));
});

module.exports = runner;
