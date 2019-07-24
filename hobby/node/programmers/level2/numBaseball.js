/* eslint-disable require-jsdoc */
function solution(baseball) {
  let cases = new Array(900).fill(100)
      .map((value, index) => String(value + index))
      .filter((value) => {
        const sets = [...new Set(value)];
        return sets.length === 3 && !sets.includes('0');
      });

  baseball.forEach(([num, strike, ball]) => {
    const currNum = [...String(num)];
    cases = cases.filter((value) =>
      currNum.filter((num) => {
        return value.includes(num);
      }).length === strike + ball &&
      currNum.filter((num, index) => {
        return value.indexOf(num) === index;
      }).length === strike
    );
  });
  return cases.length;
}

const testCase = [];
testCase.push({
  baseball: [
    [123, 1, 1],
    [356, 1, 0],
    [327, 2, 0],
    [489, 0, 1],
  ],
  answer: 2,
});
testCase.push({
  baseball: [
    [123, 0, 0],
  ],
  answer: 120,
});

const runner = () => testCase.forEach(({baseball, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(baseball);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
