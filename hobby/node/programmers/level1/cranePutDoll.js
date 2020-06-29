/* eslint-disable require-jsdoc */
function init(board) {
  const holder = {};
  for (let i = 1; i <= board.length; i += 1) {
    holder[i] = [];
  }
  board.forEach((lastestRow) => {
    lastestRow.forEach((value, index) => {
      if (value) holder[index+1].unshift(value);
    });
  });
  return holder;
}

function solution(board, moves) {
  const holder = init(board);

  let result = 0;
  const basket = [];
  moves.forEach((pos) => {
    const doll = holder[pos].pop();
    if (typeof doll === 'undefined') return;
    if (basket[basket.length - 1] !== doll) {
      basket.push(doll);
      return;
    }
    basket.pop();
    result += 2;
  });
  return result;
}

const testCase = [];
testCase.push({
  board: [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  moves: [1, 5, 3, 5, 1, 2, 1, 4],
  result: 4,
});

const runner = () => testCase.forEach(({board, moves, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(board, moves);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
