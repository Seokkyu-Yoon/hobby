/* eslint-disable require-jsdoc */
const getOddPalindrome = (s, i) => {
  let move = 0;
  while (s[i - move] === s[i + move]) {
    move += 1;
    if (i - move === -1 || i + move === s.length) {
      break;
    }
  }
  return (move - 1) * 2 + 1;
};

const getEvenPalindrome = (s, i) => {
  if (i === 0) return 0;
  let move = 0;
  while (s[i - 1 - move] === s[i + move]) {
    move += 1;
    if (i - 1 - move === -1 || i + move === s.length) {
      break;
    }
  }
  return move * 2;
};

function solution(s) {
  let maxPalindrome = 0;
  for (let i = 0; i < s.length; i++) {
    const odd = getOddPalindrome(s, i);
    const even = getEvenPalindrome(s, i);
    maxPalindrome = Math.max(odd, even, maxPalindrome);
  }
  return maxPalindrome;
}

const testCase = [];
testCase.push({
  s: 'abcdcba',
  answer: 7,
});
testCase.push({
  s: 'abacde',
  answer: 3,
});
testCase.push({
  s: 'abbac',
  answer: 4,
});
testCase.push({
  s: 'aba',
  answer: 3,
});
testCase.push({
  s: 'aa',
  answer: 2,
});
testCase.push({
  s: '',
  answer: 0,
});
testCase.push({
  s: 'a',
  answer: 1,
});
testCase.push({
  s: 'davae',
  answer: 3,
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
