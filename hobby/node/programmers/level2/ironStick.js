function solution(arrangement) {
  return Array.from(arrangement.split('()').join('.'))
    .reduce((acc, value) => {
      if(value === '(') acc.open++;
      if(value === '.') acc.count += acc.open;
      if(value === ')') {
        acc.count += 1;
        acc.open--;
      }
      return acc;
    }, {
      open: 0,
      count: 0,
    }).count;
}

const testCase = [];
testCase.push({
  arrangement: '()(((()())(())()))(())'
});

const runner = () => testCase.forEach(({arrangement}) => {
  console.log(solution(arrangement));
});

module.exports = runner;
