function solution(n) {
  const answer = (function getDivisor(divider = 1, acc = 0) {
    if (divider > n) return acc;
    if (n % divider === 0) acc += divider;
    return getDivisor(divider + 1, acc);
  })();
  return answer;
}

const testCase = [];
testCase.push({
  n: 12,
});
testCase.push({
  n: 5,
});

const runner = () => testCase.forEach(({n}) => {
  console.log(solution(n));
});

module.exports = runner;
