/* eslint-disable require-jsdoc */
const changeLetter = (letter) =>
  `${letter.slice(0, 1).toUpperCase()}` +
  `${letter.slice(1).toLowerCase()}`;

const solution = (s) => s.split(' ').map(changeLetter).join(' ');

const testCase = [];
testCase.push({
  s: '3people unFollowed me',
  answer: '3people Unfollowed Me',
});
testCase.push({
  s: 'for the last week',
  answer: 'For The Last Week',
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
