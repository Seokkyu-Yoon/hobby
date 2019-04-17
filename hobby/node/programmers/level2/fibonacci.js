/**
 * This function is called when mod(n'th fibonacci number mod, 1234567)
 * @param {Number} n
 * @return {Number}
 */
function solution(n) {
  const fibonacci = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      fibonacci[i] = i;
      continue;
    }
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;
  }
  return fibonacci[n];
}
const testCase = [];
testCase.push({
  n: 3,
});
testCase.push({
  n: 5,
});
testCase.push({
  n: 100000,
});

const runner = () => testCase.forEach(({n}) => {
  console.log(solution(n));
});

module.exports = runner;
