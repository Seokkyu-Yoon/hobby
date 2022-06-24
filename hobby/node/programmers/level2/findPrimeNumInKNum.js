/* eslint-disable no-console */
function parse(n, k) {
  const arr = [];
  let num = n;
  while (num !== 0) {
    arr.unshift(num % k);
    num = Math.floor(num / k);
  }
  return arr.join('');
}

function isPrimeNumber(num) {
  if (num < 2) return false;
  for (let i = 2; i ** 2 <= num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  const strBaseNum = parse(n, k);
  const strNums = strBaseNum.split('0');
  return strNums.reduce((acc, strNum) => acc + (!!strNum && isPrimeNumber(Number(strNum))), 0);
}

const testCase = [];
testCase.push({
  n: 437674,
  k: 3,
  result: 3,
});
testCase.push({
  n: 110011,
  k: 10,
  result: 2,
});

function test() {
  testCase.forEach(({ n, k, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(n, k);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
