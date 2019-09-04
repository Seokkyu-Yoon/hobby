/* eslint-disable require-jsdoc */
function solution(m, n, board) {
  const reformedBoard = new Array(n).fill(null).map((v, x) =>
    new Array(m).fill(null).map((v, y) => board[y][x]).reverse()
  );
  let answer = 0;
  while (true) {
    const breakInfo = new Array(n).fill(null).map(() => new Set());
    for (let y = 1; y < n; y += 1) {
      for (let x = 1; x < m; x += 1) {
        if (
          reformedBoard[y - 1][x - 1] === undefined ||
          reformedBoard[y - 1][x] === undefined ||
          reformedBoard[y][x - 1] === undefined ||
          reformedBoard[y][x] === undefined
        ) {
          continue;
        }
        if (
          reformedBoard[y - 1][x - 1] === reformedBoard[y - 1][x] &&
          reformedBoard[y][x - 1] === reformedBoard[y][x] &&
          reformedBoard[y - 1][x - 1] === reformedBoard[y][x]
        ) {
          breakInfo[y-1].add(x-1);
          breakInfo[y-1].add(x);
          breakInfo[y].add(x-1);
          breakInfo[y].add(x);
        }
      }
    }
    const breakCount = breakInfo.reduce((acc, set, y) => {
      const blockIndexes = [...set];
      reformedBoard[y] = reformedBoard[y].filter((block, index) => {
        return !blockIndexes.includes(index);
      });
      return acc + set.size;
    }, 0);
    if (breakCount === 0) break;
    answer += breakCount;
  }
  return answer;
}

const testCase = [];
testCase.push({
  m: 4,
  n: 5,
  board: `CCBDE, AAADE, AAABF, CCBBF`.split(', '),
  answer: 14,
});
testCase.push({
  m: 6,
  n: 6,
  board: `TTTANT, RRFACC, RRRFCC, TRRRAA, TTMMMF, TMMTTJ`.split(', '),
  answer: 15,
});

const runner = () => testCase.forEach(({m, n, board, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(m, n, board);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
