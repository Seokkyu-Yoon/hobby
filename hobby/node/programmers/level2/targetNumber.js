/* eslint-disable require-jsdoc */
function solution(numbers, target) {
  const NUMBER_SIZE = numbers.length;
  const cases = new Array(2 ** NUMBER_SIZE).fill(null)
      .map((v, index) => [...index.toString(2).padStart(NUMBER_SIZE, '0')]);
  return cases.reduce((acc, status) => {
    const currCase = status.reduce((acc, flag, numIndex) =>
      flag === '0' ? acc + numbers[numIndex] : acc - numbers[numIndex]
    , 0);
    return currCase === target ? acc + 1 : acc;
  }, 0);
}

const testCase = [];
testCase.push({
  numbers: [
    1, 1, 1, 1, 1,
  ],
  target: 3,
  result: 5,
});

const runner = () => testCase.forEach(({numbers, target, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(numbers, target);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
