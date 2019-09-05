/* eslint-disable require-jsdoc */
function solution(n, t, m, p) {
  const holder = [];
  let number = 0;
  while (holder.length < m * t + p) {
    const values = number.toString(n).toUpperCase();
    holder.push(...values);
    number += 1;
  }
  const answer = [];
  for (let i = 0; i < t; i += 1) {
    answer.push(holder[i * m + (p - 1)]);
  }
  return answer.join('');
}

const testCase = [];
testCase.push({
  n: 2,
  t: 4,
  m: 2,
  p: 1,
  result: '0111',
});
testCase.push({
  n: 16,
  t: 16,
  m: 2,
  p: 1,
  result: '02468ACE11111111',
});
testCase.push({
  n: 16,
  t: 16,
  m: 2,
  p: 2,
  result: '13579BDF01234567',
});

const runner = () => testCase.forEach(({n, t, m, p, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, t, m, p);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
