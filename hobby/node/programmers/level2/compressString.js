/* eslint-disable require-jsdoc */
function isMatch(s, prevIndex, currIndex, level) {
  const base = s.slice(prevIndex, prevIndex + level);
  const target = s.slice(currIndex, currIndex + level);
  return base === target;
}

function getCurrString(s, prevIndex, level, currString, count) {
  if (count > 1) {
    return `${currString}${count}${s.slice(prevIndex, prevIndex + level)}`;
  }
  return `${currString}${s.slice(prevIndex, prevIndex + level)}`;
}

function solution(s) {
  const min = 1;
  const max = Math.floor(s.length / 2);
  const memos = [s];
  for (let level = min; level <= max; level++) {
    let prevIndex = 0;
    let currIndex = level;
    let currString = '';
    let count = 1;
    while (currIndex < s.length) {
      if (isMatch(s, prevIndex, currIndex, level)) {
        count += 1;
      } else {
        currString = getCurrString(s, prevIndex, level, currString, count);
        prevIndex = currIndex;
        count = 1;
      }
      currIndex += level;
    }
    currString = getCurrString(s, prevIndex, level, currString, count);
    memos.push(currString);
  }
  return Math.min.apply(null, memos.map((memo) => memo.length));
}

const testCase = [];
testCase.push({
  s: 'aabbaccc',
  result: 7,
});
testCase.push({
  s: 'ababcdcdababcdcd',
  result: 9,
});
testCase.push({
  s: 'abcabcdede',
  result: 8,
});
testCase.push({
  s: 'abcabcabcabcdededededede',
  result: 14,
});
testCase.push({
  s: 'xababcdcdababcdcd',
  result: 17,
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
