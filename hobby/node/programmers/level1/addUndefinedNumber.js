/* eslint-disable no-console */
function solution(numbers) {
  const max = 45;
  return numbers.reduce((acc, number) => acc - number, max);
}

const testCase = [];
testCase.push({
  numbers: [1, 2, 3, 4, 6, 7, 8, 0],
  result: 14,
});
testCase.push({
  numbers: [5, 8, 4, 0, 6, 7, 9],
  result: 6,
});

function test() {
  testCase.forEach(({ a, b, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(a, b);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
