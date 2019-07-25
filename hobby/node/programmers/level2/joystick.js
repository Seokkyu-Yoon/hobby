/* eslint-disable require-jsdoc */
function solution(name) {
  const nameSize = name.length;
  const moveCursors = [...name].map((letter) =>
    Math.min(letter.charCodeAt() - 65, 91 - letter.charCodeAt())
  );
  let move = 0;
  let currIndex = 0;
  while (true) {
    move += moveCursors[currIndex];
    moveCursors[currIndex] = 0;
    let moveRight = 1;
    while (moveRight < nameSize) {
      if (moveCursors[(currIndex + moveRight) % nameSize] > 0) break;
      moveRight += 1;
    };
    let moveLeft = 1;
    while (moveLeft < nameSize) {
      if (moveCursors[(currIndex - moveLeft + nameSize) % nameSize] > 0) break;
      moveLeft += 1;
    }
    if (moveLeft === nameSize && moveRight === nameSize) break;
    const value = Math.min(moveLeft, moveRight);
    move += value;
    currIndex = value === moveRight ?
      currIndex + moveRight :
      currIndex - moveLeft + nameSize;
    currIndex %= nameSize;
  }
  return move;
}

const testCase = [];
testCase.push({
  name: 'JEROEN',
  answer: 56,
});
testCase.push({
  name: 'JAN',
  answer: 23,
});
testCase.push({
  name: 'JAZ',
  answer: 11,
});
testCase.push({
  name: 'ABAABAAB',
  answer: 9,
});

const runner = () => testCase.forEach(({name, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(name);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
