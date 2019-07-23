/* eslint-disable require-jsdoc */
function solution(s) {
  const holder = [];
  for (const letter of s) {
    if (holder.length === 0) {
      holder.push(letter);
      continue;
    }
    const lastLetter = holder.pop();
    if (lastLetter !== letter) {
      holder.push(lastLetter);
      holder.push(letter);
    }
  }
  return holder.length ? 0 : 1;
}

const testCase = [];
testCase.push({
  s: 'baabaa',
  result: 1,
});
testCase.push({
  s: 'cdcd',
  result: 0,
});

const runner = () => testCase.forEach(({s, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(s);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
