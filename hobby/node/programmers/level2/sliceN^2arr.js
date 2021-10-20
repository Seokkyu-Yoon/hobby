/* eslint-disable no-console */
function solution(n, left, right) {
  const arr = [];
  const yStart = Math.floor(left / n);
  const yEnd = Math.ceil(right / n);
  for (let y = yStart; y < yEnd; y += 1) {
    const xStart = Math.max(0, left - y * n);
    const xEnd = Math.min(n, right + 1 - y * n);
    for (let x = xStart; x < xEnd; x += 1) {
      const value = x < y ? y : x;
      arr.push(value + 1);
    }
  }
  return arr;
}

const testCase = [];
testCase.push({
  n: 3,
  left: 2,
  right: 5,
  result: [3, 2, 2, 3],
});
testCase.push({
  n: 4,
  left: 7,
  right: 14,
  result: [4, 3, 3, 3, 4, 4, 4, 4],
});

function test() {
  testCase.forEach(({
    n, left, right, result,
  }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(n, left, right);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
