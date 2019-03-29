function solution(seoul) {
  let count = -1;
  seoul.some((element) => {
    count++;
    return element === 'Kim';
  });
  return `김서방은 ${count}에 있다`;
}

const testCase = [];
testCase.push({
  seoul: ['Jane', 'Kim'],
});

const runner = () => testCase.forEach(({seoul}) => {
  console.log(solution(seoul));
});

module.exports = runner;
