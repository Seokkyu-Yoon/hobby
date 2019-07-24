/* eslint-disable require-jsdoc */
const isValid = (board, x, y, maxX, side) => {
  for (let level = side; level > 0; level--) {
    const currX = x + level - 1;
    const currY = y + level - 1;
    for (let step = 0; step < level; step++) {
      if (!board[currY - step][currX]) {
        return {
          state: false,
          moveX: currX,
          moveY: currX + side >= maxX ? currY - step : y,
        };
      }
      if (!board[currY][currX - step]) {
        return {
          state: false,
          moveX: currX - step,
          moveY: currX - step + side >= maxX ? currY : y,
        };
      }
    }
  }
  return {
    state: true,
  };
};

function solution(board) {
  const maxY = board.length;
  const maxX = board[0].length;
  const maxSide = Math.min(maxY, maxX);
  for (let side = maxSide; side >= 1; side--) {
    for (let y = 0; y <= maxY - side; y++) {
      for (let x = 0; x <= maxX - side; x++) {
        const {
          state,
          moveX,
          moveY,
        } = isValid(board, x, y, maxX, side);
        if (state) return side * side;
        x = moveX;
        y = moveY;
      }
    }
  }
  return 0;
}

const testCase = [];
testCase.push({
  board: [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ],
  answer: 9,
});
testCase.push({
  board: [
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ],
  answer: 4,
});
testCase.push({
  board: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  answer: 0,
});
testCase.push({
  board: [
    [1, 0, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
  ],
  answer: 4,
});

const runner = () => testCase.forEach(({board, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(board);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
