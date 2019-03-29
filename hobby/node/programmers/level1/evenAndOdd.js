function solution(num) {
  return num % 2 == 0 ? 'Even' : 'Odd';
}

const testCase = [];
testCase.push({
  num: 3,
});
testCase.push({
  num: 4,
});

const runner = () => testCase.forEach(({num}) => {
  console.log(solution(num));
});

module.exports = runner;
