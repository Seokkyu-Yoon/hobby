/* eslint-disable require-jsdoc */
function solution(n, a, b) {
  let currA = a;
  let currB = b;
  let count = 0;
  while (currA !== currB) {
    currA = Math.ceil(currA / 2);
    currB = Math.ceil(currB / 2);
    count++;
  }
  return count;
}

const testCase = [];
testCase.push({
  n: 8,
  a: 4,
  b: 7,
  answer: 3,
});

const runner = () => testCase.forEach(({n, a, b, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, a, b);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
