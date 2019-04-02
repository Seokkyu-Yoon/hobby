function solution(n) {
  const addNum = (n, acc = 0) => {
    if(n == 0) return acc;
    acc += n % 10;
    return addNum(Math.floor(n/10), acc);
  };
  return addNum(n);
}

const testCase = [];
testCase.push({
  n: 123,
});
testCase.push({
  n: 987,
});
testCase.push({
  n: 100000000,
});
testCase.push({
  n: 99999999,
});

const runner = () => testCase.forEach(({n}) => {
  console.log(solution(n));
});

module.exports = runner;
