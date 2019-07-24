/* eslint-disable require-jsdoc */
function solution(numbers) {
  let answer = 0;
  const holderSize = 10 ** numbers.length;
  const holder = new Array(holderSize).fill(true);
  holder[0] = false;
  holder[1] = false;
  for (let i = 2; i < holderSize; i++) {
    if (!holder[i]) continue;
    for (let factor = 2; factor * i < holderSize; factor++) {
      holder[factor * i] = false;
    }
    let numberChecker = numbers;
    const without = [...String(i)].some((value) => {
      const included = numberChecker.includes(value);
      if (included) {
        numberChecker = numberChecker.replace(value, '');
      }
      return !included;
    });
    if (!without) {
      answer += 1;
    }
  }
  return answer;
}

const testCase = [];
testCase.push({
  numbers: '17',
  answer: 3,
});
testCase.push({
  numbers: '011',
  answer: 2,
});
testCase.push({
  numbers: '1111111',
  answer: 1,
});

const runner = () => testCase.forEach(({numbers, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(numbers);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
