/* eslint-disable require-jsdoc */
function solution(a, b) {
  const getAnswer = (from, to) => {
    const distance = to - from + 1;
    const value = from + to;
    const vCount = parseInt(distance / 2);
    const isOdd = distance % 2;
    return value * vCount + value * isOdd / 2;
  };

  return a >= b ? getAnswer(b, a) : getAnswer(a, b);
}

const testCase = [];
testCase.push({
  a: 3,
  b: 5,
});
testCase.push({
  a: 3,
  b: 3,
});
testCase.push({
  a: 5,
  b: 3,
});

const runner = () => testCase.forEach(({a, b}) => {
  console.log(solution(a, b));
});

module.exports = runner;
