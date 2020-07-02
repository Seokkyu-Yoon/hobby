/* eslint-disable require-jsdoc */
function solution(n) {
  let result = [0];
  for (let step = 2; step <= n; step += 1) {
    result = [
      ...result,
      0,
      ...[...result].reverse().map(((value) => 1 - value)),
    ];
  }
  return result;
}

const testCase = [];
testCase.push({
  n: 1,
  result: [0],
});
testCase.push({
  n: 2,
  result: [0, 0, 1],
});
testCase.push({
  n: 3,
  result: [0, 0, 1, 0, 0, 1, 1],
});

const runner = () => testCase.forEach(({ n, result }, index) => {
  console.log(` - ${index + 1}-case:`);
  try {
    const myResult = solution(n);
    // if answer is value use it
    // console.log(`* result: ${myResult}`
    // console.log(`* correct:${myResult === result}`);

    // if answer is list use it
    console.log('* result');
    console.log(myResult);
    console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
