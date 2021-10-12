/* eslint-disable no-console */
function solution() {

}

const testCase = [];
testCase.push({

});

function test() {
  testCase.forEach(({ result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution();
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
