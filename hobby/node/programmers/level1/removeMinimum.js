function solution(arr) {
  const minIndex = arr.reduce((acc, num, index, arr) => num < arr[acc] ? index : acc, 0);
  const answer = arr.slice(0, minIndex).concat(arr.slice(minIndex + 1));
  return answer.length > 0 ? answer : [-1];
}

const testCase = [];
testCase.push({
  arr: [4,3,2,1],
});
testCase.push({
  arr: [10],
});

const runner = () => testCase.forEach(({arr}) => {
  console.log(solution(arr));
});

module.exports = runner;
