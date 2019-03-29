function solution(s) {
  let pCount = 0;
  let yCount = 0;
  Array.from(s.toLowerCase()).forEach((value) => {
    if(value === 'p') pCount++;
    if(value === 'y') yCount++;
  });
  return pCount === yCount;
}

const testCase = [];
testCase.push({
  s: 'pPoooyY',
});
testCase.push({
  s: 'Pyy',
});

const runner = () => testCase.forEach(({s}) => {
  console.log(solution(s));
});

module.exports = runner;
