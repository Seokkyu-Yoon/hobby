/* eslint-disable require-jsdoc */
function solution(triangle) {
  for (let y = triangle.length - 2; y >= 0; y--) {
    for (let x = 0; x <= y; x++) {
      triangle[y][x] += Math.max(triangle[y+1][x], triangle[y+1][x+1]);
    }
  }
  return triangle[0][0];
}

const testCase = [];
testCase.push({
  triangle: [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]],
  result: 30,
});

const runner = () => testCase.forEach(({triangle, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(triangle);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
