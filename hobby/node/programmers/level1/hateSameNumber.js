function solution(arr) {
  return arr.filter((value, index) => value != arr[index - 1]);
}

const testCase = [];
testCase.push({
  arr: [1,1,3,3,0,1,1],
});
testCase.push({
  arr: [4,4,4,3,3],
});

const runner = () => testCase.forEach(({arr}) => {
  console.log(solution(arr));
});

module.exports = runner;
