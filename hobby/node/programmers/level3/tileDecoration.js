/* eslint-disable require-jsdoc */
function solution(n) {
  let prev = 0;
  let curr = 1;
  for (let i = 0; i < n; i++) {
    const temp = prev;
    prev = curr;
    curr = temp + curr;
  }
  return (prev + curr) * 2;
}

const testCase = [];
testCase.push({
  n: 5,
  answer: 26,
});
testCase.push({
  n: 6,
  answer: 42,
});
testCase.push({
  n: 1,
  answer: 4,
});
testCase.push({
  n: 2,
  answer: 6,
});

const runner = () => testCase.forEach(({n, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
