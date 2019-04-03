function solution(num) {
  const step = (num, acc = 0) => {
    if(acc > 500) return -1;
    if(num == 1) return acc;
    return num % 2 === 0 ?
      step(num / 2, acc + 1) :
      step(num + num + num + 1, acc + 1);
  };
  return step(num);
}

const testCase = [];
testCase.push({
  num: 6,
});
testCase.push({
  num: 16,
});
testCase.push({
  num: 626331,
});

const runner = () => testCase.forEach(({num}) => {
  console.log(solution(num));
});

module.exports = runner;
