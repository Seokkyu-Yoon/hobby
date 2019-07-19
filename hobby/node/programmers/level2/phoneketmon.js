const solution = (nums) => {
  const kinds = [...new Set(nums)].length;
  const chooses = parseInt(nums.length / 2);
  return Math.min(kinds, chooses);
};

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

const runner = () => testCase.forEach(({nums, result}, index) => {
  console.log(`${index+1}번 case:`);
  try {
    const myResult = solution(nums);
    console.log(`  결과: ${myResult}\t정답여부: ${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
