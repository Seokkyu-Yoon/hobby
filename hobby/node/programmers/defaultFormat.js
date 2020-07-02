/* eslint-disable require-jsdoc */
function solution() {

}

const testCase = [];
testCase.push({

});

const runner = () => testCase.forEach(({}, index) => {
  console.log(` - ${index + 1}-case:`);
  try {
    const myResult = solution();
    // if answer is value use it
    // console.log(`* result: ${myResult}`
    // console.log(`* correct:${myResult === result}`);

    // if answer is list use it
    // console.log('* result');
    // console.log(myResult);
    // console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
