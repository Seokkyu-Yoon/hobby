function solution(n) {
  const get124Num = (n, acc = []) => {
    if(n === 0) return acc;
    acc.push(n % 3 === 0 ? 4 : n % 3);
    return get124Num(Math.floor((n-1)/3), acc);
  };

  return get124Num(n).reverse().join('');
}

const testCase = [];
testCase.push({
  n: 1,
});
testCase.push({
  n: 2,
});
testCase.push({
  n: 3,
});
testCase.push({
  n: 4,
});
testCase.push({
  n: 5,
});
testCase.push({
  n: 6,
});
testCase.push({
  n: 7,
});
testCase.push({
  n: 8,
});
testCase.push({
  n: 9,
});
testCase.push({
  n: 10,
});

const runner = () => testCase.forEach(({n}) => {
  console.log(solution(n));
});

module.exports = runner;
