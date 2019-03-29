const solution = (s) => {
  return (s.length == 4 || s.length == 6) && !Array.from(s).some((c) => isNaN(c));
};

const testCase = [];
testCase.push({
  s: 'a234',
});
testCase.push({
  s: '1234',
});

const runner = () => testCase.forEach(({s}) => {
  console.log(solution(s));
});

module.exports = runner;
