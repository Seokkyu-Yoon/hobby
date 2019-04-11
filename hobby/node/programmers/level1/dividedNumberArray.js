function solution(arr, divisor) {
  const answer = arr.filter((element) => element % divisor == 0).sort((a, b) => a - b);
  return answer.length > 0 ? answer : [-1];
}

const testCase = [];
testCase.push({
  arr: [5, 9, 7, 10],
  divisor: 5,
});
testCase.push({
  arr: [2, 36, 1, 3],
  divisor: 1,
});
testCase.push({
  arr: [3, 2, 6],
  divisor: 10,
});

const runner = () => testCase.forEach(({arr, divisor}) => {
  console.log(solution(arr, divisor));
});

module.exports = runner;
