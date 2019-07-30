/* eslint-disable require-jsdoc */
function solution(n, s) {
  if (s < n) return [-1];
  const result = new Array(n).fill(parseInt(s/n));
  const remain = s % n;
  for (let i = 1; i <= remain; i++) {
    result[n-i] += 1;
  }
  return result;
}

const testCase = [];
testCase.push({
  n: 2,
  s: 9,
  result: [4, 5],
});
testCase.push({
  n: 2,
  s: 1,
  result: [-1],
});

const runner = () => testCase.forEach(({n, s, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, s);
    console.log(`  result: ${myResult}\tcorrect:${result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
