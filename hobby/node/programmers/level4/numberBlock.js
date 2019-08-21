/* eslint-disable require-jsdoc */
function solution(begin, end) {
  const maxBlock = Math.min(end / 2, 10000000);
  const mustChange = end - begin + 1;
  const result = new Array(mustChange).fill(1);
  if (begin === 1) result[0] = 0;
  for (let num = 2; num <= maxBlock; num += 1) {
    const maxIndex = end / num;
    let index = Math.ceil(begin / num);
    while (index <= maxIndex) {
      const value = num * index - begin;
      if (result[value] === 1) {
        result[value] = index;
      }
      index += 1;
    }
  }
  return result;
}

const testCase = [];
testCase.push({
  begin: 1,
  end: 10,
  result: [
    0, 1, 1, 2, 1, 3, 1, 4, 3, 5,
  ],
});
testCase.push({
  begin: 999999999,
  end: 1000000000,
  result: [
    333333333, 500000000,
  ],
});

const runner = () => testCase.forEach(({begin, end, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(begin, end);
    console.log(`  result: ${myResult}\tcorrect:${result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
