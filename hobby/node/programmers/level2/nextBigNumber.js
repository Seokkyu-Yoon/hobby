function solution(n) {
  const binary = ((acc) => {

  })([]);
  while (n > 0) {
    binary.push(n & 1);
    n = n >> 1;
  }
  return binary;
}

const testCase = [];
testCase.push({
  n: 78,
});
testCase.push({
  n: 15,
});

const runner = () => testCase.forEach(({n}) => {
  console.log(solution(n));
});

module.exports = runner;
