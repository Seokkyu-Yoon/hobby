/* eslint-disable require-jsdoc */
function solution(n, works) {
  works.sort((a, b) => b - a);
  while (n > 0) {
    if (works[0] === 0) return 0;
    const criticalSection = works.lastIndexOf(works[0]);
    for (let i = 0; i <= criticalSection; i++) {
      if (n === 0) break;
      works[i] -= 1;
      n -= 1;
    }
  }
  return works.reduce((acc, value) => acc + value ** 2, 0);
}

const testCase = [];
testCase.push({
  works: [
    4, 3, 3,
  ],
  n: 4,
  result: 12,
});
testCase.push({
  works: [
    2, 1, 2,
  ],
  n: 1,
  result: 6,
});
testCase.push({
  works: [
    1, 1,
  ],
  n: 3,
  result: 0,
});

const runner = () => testCase.forEach(({works, n, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, works);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
