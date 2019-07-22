/* eslint-disable require-jsdoc */
const solution = (brown, red) => {
  const sumXY = parseInt((brown - 4) / 2);
  const size = parseInt(sumXY / 2);
  for (let y = 1; y <= size; y++) {
    const x = sumXY - y;
    if (red % y !== 0 && red % x !== 0) continue;
    if (x * y === red) return [x + 2, y + 2];
  }
  return -1;
};

const testCase = [];
testCase.push({
  brown: 10,
  red: 2,
  answer: [4, 3],
});
testCase.push({
  brown: 8,
  red: 1,
  answer: [3, 3],
});
testCase.push({
  brown: 24,
  red: 24,
  answer: [8, 6],
});

const runner = () => testCase.forEach(({brown, red, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(brown, red);
    console.log(`  result: ${myResult}\tcorrect:${answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
