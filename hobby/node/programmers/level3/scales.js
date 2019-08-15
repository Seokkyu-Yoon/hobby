/* eslint-disable require-jsdoc */
function solution(weight) {
  weight.sort((a, b) => a - b);

  let acc = 1;
  weight.some((value) => {
    if (value > acc) return true;
    acc += value;
    return false;
  });
  return acc;
}

const testCase = [];
testCase.push({
  weight: [
    3, 1, 6, 2, 7, 30, 1,
  ],
  result: 21,
});

const runner = () => testCase.forEach(({weight, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(weight);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
