/* eslint-disable require-jsdoc */
function solution(s) {
  const indexes = s.length%2 == 1 ?
  [parseInt(s.length/2)] :
  [parseInt(s.length/2)-1, parseInt(s.length/2)];
  return `${s.charAt(indexes[0])}${indexes[1] ? s.charAt(indexes[1]) : ''}`;
}

const testCase = [];
testCase.push({
  s: 'abcde',
});
testCase.push({
  s: 'qwer',
});

const runner = () => testCase.forEach(({s}) => {
  console.log(solution(s));
});

module.exports = runner;
