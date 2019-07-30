/* eslint-disable require-jsdoc */
const move = (charactor, action) => {
  if (action === 'U') charactor.y += 1;
  if (action === 'D') charactor.y -= 1;
  if (action === 'R') charactor.x += 1;
  if (action === 'L') charactor.x -= 1;
  if (charactor.y < 0) {
    charactor.y = 0;
    return false;
  }
  if (charactor.y > 10) {
    charactor.y = 10;
    return false;
  }
  if (charactor.x < 0) {
    charactor.x = 0;
    return false;
  }
  if (charactor.x > 10) {
    charactor.x = 10;
    return false;
  }
  return true;
};
function solution(dirs) {
  const charactor = {
    x: 5,
    y: 5,
  };
  const verticalLines = [];
  const horizontalLines = [];
  for (let i = 0; i < 11; i++) {
    verticalLines[i] = new Array(10).fill(false);
    horizontalLines[i] = new Array(10).fill(false);
  }
  return [...dirs].reduce((acc, action) => {
    const {x: prevX, y: prevY} = charactor;
    if (!move(charactor, action)) return acc;
    const {x: currX, y: currY} = charactor;
    if (action === 'U' || action === 'D') {
      if (!verticalLines[currX][Math.min(prevY, currY)]) {
        acc += 1;
        verticalLines[currX][Math.min(prevY, currY)] = true;
      };
    }
    if (action === 'R' || action === 'L') {
      if (!horizontalLines[currY][Math.min(prevX, currX)]) {
        acc += 1;
        horizontalLines[currY][Math.min(prevX, currX)] = true;
      };
    }
    return acc;
  }, 0);
}

const testCase = [];
testCase.push({
  dirs: 'ULURRDLLU',
  answer: 7,
});
testCase.push({
  dirs: 'LULLLLLLU',
  answer: 7,
});

const runner = () => testCase.forEach(({dirs, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(dirs);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
