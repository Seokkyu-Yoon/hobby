/* eslint-disable no-console */
function solution(n) {
  let finding = true;
  let num = 1;
  while (finding) {
    num += 1;
    if (n % num === 1) finding = false;
  }
  return num;
}

const testCase = [];
testCase.push({
  n: 10,
  result: 3,
});
testCase.push({
  n: 12,
  result: 11,
});
testCase.push({
  n: 3,
  result: 2,
});

function test() {
  testCase.forEach(({ n, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(n);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
