/* eslint-disable no-console */
function solution(nums) {
  const kinds = [...new Set(nums)].length;
  const chooses = Math.floor(nums.length / 2);
  return Math.min(kinds, chooses);
}

const testCase = [];
testCase.push({
  nums: [3, 1, 2, 3],
  result: 2,
});
testCase.push({
  nums: [3, 3, 3, 2, 2, 4],
  result: 3,
});
testCase.push({
  nums: [3, 3, 3, 2, 2, 2],
  result: 2,
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
