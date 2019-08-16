/* eslint-disable require-jsdoc */
function solution(n, cores) {
  let front = 0;
  let end = 250000000;
  while (front !== end) {
    const mid = Math.floor((end + front) / 2);
    const totalDones = cores.reduce((acc, spend) =>
      acc + Math.floor(mid / spend) + 1
    , 0);
    if (totalDones >= n) {
      end = mid;
    } else {
      front = mid + 1;
    }
  }
  const totalDones = cores.reduce((acc, spend) =>
    acc + Math.floor((front - 1) / spend) + 1
  , 0);
  let count = n - totalDones;
  let result = 0;
  cores.some((spend, index) => {
    if (front % spend === 0) {
      count -= 1;
      result = index;
    }
    return count === 0;
  });
  return result + 1;
}

const testCase = [];
testCase.push({
  n: 6,
  cores: [1, 2, 3],
  result: 2,
});
testCase.push({
  n: 7,
  cores: [1, 2, 3],
  result: 1,
});
testCase.push({
  n: 2,
  cores: [1, 2, 3],
  result: 2,
});
testCase.push({
  n: 3,
  cores: [1, 2, 3],
  result: 3,
});

const runner = () => testCase.forEach(({n, cores, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, cores);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
