/* eslint-disable require-jsdoc */
function solution(land) {
  return Math.max.apply(null, land.reduce((scoreHolder, row) => {
    return row.map((score, sIndex) => {
      return score + Math.max.apply(
          null,
          scoreHolder.filter((value, rIndex) => rIndex !== sIndex)
      );
    });
  }, new Array(4).fill(0)));
}

const testCase = [];
testCase.push({
  land: [
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ],
  answer: 16,
});

const runner = () => testCase.forEach(({land, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(land);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
