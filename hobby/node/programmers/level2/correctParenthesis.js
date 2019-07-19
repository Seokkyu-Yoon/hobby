/* eslint-disable require-jsdoc */
function solution(s) {
  let check = 0;
  for (const letter of s) {
    check += letter === '\(' ? 1 : -1;
    if (check < 0) break;
  }
  return check === 0 ? true : false;
}

const testCase = [];
testCase.push({
  s: '()()',
  answer: true,
});
testCase.push({
  s: '(())()',
  answer: true,
});
testCase.push({
  s: ')()(',
  answer: false,
});
testCase.push({
  s: '(()(',
  answer: false,
});

const runner = () => testCase.forEach(({s, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(s);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
