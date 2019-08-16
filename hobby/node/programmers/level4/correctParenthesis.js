/* eslint-disable require-jsdoc */
function solution(n) {
  const strLength = n*2;

  let result = 0;
  const holder = new Array(strLength+1).fill(0);
  holder[0] = 1;
  while (holder[strLength] === 0) {
    for (let i = 1; i <= strLength; i += 1) {
      holder[i] = (holder[i] + 1) % 2;
      if (holder[i] === 1) break;
    }

    let checker = 0;
    for (let i = 0; i < strLength; i += 1) {
      checker += holder[i] === 1 ? 1 : -1;
      if (checker < 0) break;
    }
    if (checker === 0) result += 1;
  }
  return result;
}

const testCase = [];
testCase.push({
  n: 2,
  result: 2,
});
testCase.push({
  n: 3,
  result: 5,
});
testCase.push({
  n: 4,
  result: 14,
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
