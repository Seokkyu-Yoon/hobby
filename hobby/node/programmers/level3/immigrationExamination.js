/* eslint-disable require-jsdoc */
function solution(n = 1, times = [1]) {
  const MAX_REQUIRE = 1000000000000000000;
  let low = 1;
  let high = MAX_REQUIRE;
  while (low !== high) {
    const size = Math.floor((high - low) / 2);
    const mid = low + size;
    const done = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
    if (n > done) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

const testCase = [];
testCase.push({
  n: 6,
  times: [
    7, 10,
  ],
  result: 28,
});
testCase.push({
  n: 1,
  times: [
    7, 10,
  ],
  result: 7,
});
testCase.push({
  n: 2,
  times: [
    7, 10,
  ],
  result: 10,
});
testCase.push({
  n: 3,
  times: [
    7, 10,
  ],
  result: 14,
});
testCase.push({
  n: 7,
  times: [
    1, 2, 2, 1000000000,
  ],
  result: 4,
});

const runner = () => testCase.forEach(({n, times, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, times);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
