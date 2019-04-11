function solution(n) {
  const getNumberToReverseArr = (n, acc = []) => {
    if (n == 0) return acc;
    acc.push(n % 10);
    return getNumberToReverseArr(Math.floor(n/10), acc);
  };

  return getNumberToReverseArr(n);
}

const testCase = [];
testCase.push({
  n: 12345,
});
testCase.push({
  n: 10000000000,
});
testCase.push({
  n: 9876543210,
});

const runner = () => testCase.forEach(({n}) => {
  console.log(solution(n));
});

module.exports = runner;
