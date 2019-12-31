/* eslint-disable require-jsdoc */
function solution(s) {
  return s.split(' ').reduce((acc, splited) => {
    acc.push(
        Array.from(splited).map(
            (value, index) =>
          index % 2 == 0 ?
            value.toUpperCase():
            value.toLowerCase(),
        ).join(''),
    );
    return acc;
  }, []).join(' ');
}

const testCase = [];
testCase.push({
  s: 'try hello world',
});

const runner = () => testCase.forEach(({s}) => {
  console.log(solution(s));
});

module.exports = runner;
