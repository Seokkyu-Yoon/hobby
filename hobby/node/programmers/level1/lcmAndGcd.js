function solution(n, m) {
  const min = n > m ? m : n;
  const max = n > m ? n : m;
  const answer = (function calculate(min, max, index = 2, gcd = 1) {
    if(min == 1 || index > min) return [gcd, gcd * min * max];
    if(min % index == 0 && max % index == 0) {
      gcd *= index;
      min /= index;
      max /= index;
      return calculate(min, max, index, gcd);
    }
    return calculate(min, max, index + 1, gcd);
  })(min, max);
  return answer;
}

const testCase = [];
testCase.push({
  n: 3,
  m: 12,
});
testCase.push({
  n: 2,
  m: 5,
});

const runner = () => testCase.forEach(({n, m}) => {
  console.log(solution(n, m));
});

module.exports = runner;
