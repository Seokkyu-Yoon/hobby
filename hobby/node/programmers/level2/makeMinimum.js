/* eslint-disable require-jsdoc */
function solution(A, B) {
  A.sort((a, b) => a - b);
  return B.sort((a, b) => b - a).reduce((acc, b, index) => {
    const a = A[index];
    return acc + a * b;
  }, 0);
}

const testCase = [];
testCase.push({
  A: [1, 4, 2],
  B: [5, 4, 4],
  answer: 29,
});
testCase.push({
  A: [1, 2],
  B: [3, 4],
  answer: 10,
});

const runner = () => testCase.forEach(({A, B, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(A, B);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
