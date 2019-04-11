function solution(arr) {
  return arr.reduce((acc = 0, element) => acc + element) / arr.length;
}

const testCase = [];
testCase.push({
  arr: [1, 2, 3, 4],
});
testCase.push({
  arr: [5, 5],
});

const runner = () => testCase.forEach(({arr}) => {
  console.log(solution(arr));
});

module.exports = runner;
