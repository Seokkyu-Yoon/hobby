/* eslint-disable require-jsdoc */
function solution(n) {
  let count = 0;
  const nums = new Array(n+1).fill(0).map((value, index) => index);
  let acc = 0;
  const holder = [];
  for (const num of nums) {
    acc += num;
    holder.push(num);
    while (acc > n) {
      const value = holder.shift();
      acc -= value;
    }
    if (acc === n) {
      count += 1;
    }
  }
  return count;
}

const testCase = [];
testCase.push({
  n: 15,
  result: 4,
});

const runner = () => testCase.forEach(({n, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
