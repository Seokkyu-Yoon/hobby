/* eslint-disable require-jsdoc */
function solution() {
  return;
}

const testCase = [];
testCase.push({

});

const runner = () => testCase.forEach(({}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution();
    console.log('  result');
    console.log(myResult);
    console.log('  correct');
    console.log(myResult === answer);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
