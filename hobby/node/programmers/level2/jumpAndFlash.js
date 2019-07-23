/* eslint-disable require-jsdoc */
function solution(n) {
  let currN = n;
  let cost = 0;
  while (currN > 0) {
    if (currN % 2) cost++;
    currN = parseInt(currN / 2);
  }
  return cost;
}

const testCase = [];
testCase.push({
  n: 5,
  result: 2,
});
testCase.push({
  n: 6,
  result: 2,
});
testCase.push({
  n: 5000,
  result: 5,
});

const runner = () => testCase.forEach(({n, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
