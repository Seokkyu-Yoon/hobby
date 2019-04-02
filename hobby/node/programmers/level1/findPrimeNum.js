function solution(n) {
  const numbers = new Array(n+1);

  let acc = 0;
  for(let i = 2; i <= n; i++) {
    if(numbers[i] === undefined) {
      acc++;
      for(let j = i; j <= n; j += i) {
        numbers[j] = false;
      }
    }
  }
  return acc;
}

const testCase = [];
testCase.push({
  n: 10,
});
testCase.push({
  n: 5,
});
testCase.push({
  n: 1000000,
});

const runner = () => testCase.forEach(({n}) => {
  console.log(solution(n));
});

module.exports = runner;
