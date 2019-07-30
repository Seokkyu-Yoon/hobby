/* eslint-disable require-jsdoc */
const initFact = (n) => {
  const facts = [1, 1];
  for (let i = 2; i <= n; i++) {
    facts[i] = facts[i - 1] * i;
  }
  return facts;
};

function solution(n, k) {
  const facts = initFact(n);
  const people = new Array(n).fill(1).map((value, index) => value + index);
  const holder = [];
  let fixedK = k - 1;
  for (let i = 1; i <= n; i++) {
    const index = parseInt(fixedK / facts[n - i]);
    fixedK = fixedK % facts[n-i];
    holder.push(people[index]);
    people.splice(index, 1);
  }
  return holder;
}

const testCase = [];
testCase.push({
  n: 3,
  k: 5,
  result: [3, 1, 2],
});
testCase.push({
  n: 4,
  k: 5,
  result: [1, 4, 2, 3],
});

const runner = () => testCase.forEach(({n, k, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, k);
    console.log(`  result: ${myResult}\tcorrect:${result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
