/* eslint-disable require-jsdoc */
const MOD = 1000000007;
function solution(n) {
  const holder = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    holder[i] = (holder[i - 1] + holder[i - 2]) % MOD;
  }
  return holder[n];
}

const testCase = [];
testCase.push({
  n: 1,
  result: 1,
});
testCase.push({
  n: 2,
  result: 2,
});
testCase.push({
  n: 3,
  result: 3,
});
testCase.push({
  n: 4,
  result: 5,
});
testCase.push({
  n: 2000,
  result: 694725,
});
testCase.push({
  n: 60000,
  result: 804299274,
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
