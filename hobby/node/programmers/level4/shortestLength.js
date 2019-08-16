/* eslint-disable require-jsdoc */
function solution(maps) {
  const maxY = maps.length - 1;
  const maxX = maps[0].length - 1;
  const movedCoordinates = new Array(maxY + 1).fill(null)
      .map(() => new Array(maxX + 1).fill(false));
  movedCoordinates[0][0] = true;

  let result = 1;
  let nextCoordinates = [[0, 0]];
  while (nextCoordinates.length > 0) {
    nextCoordinates = nextCoordinates.reduce((bucket, [y, x]) => {
      if (x > 0) {
        if (maps[y][x - 1] && !movedCoordinates[y][x - 1]) {
          bucket.push([y, x - 1]);
          movedCoordinates[y][x - 1] = true;
        }
      }
      if (y > 0) {
        if (maps[y - 1][x] && !movedCoordinates[y - 1][x]) {
          bucket.push([y - 1, x]);
          movedCoordinates[y - 1][x] = true;
        }
      }
      if (x < maxX) {
        if (maps[y][x + 1] && !movedCoordinates[y][x + 1]) {
          bucket.push([y, x + 1]);
          movedCoordinates[y][x + 1] = true;
        }
      }
      if (y < maxY) {
        if (maps[y + 1][x] && !movedCoordinates[y + 1][x]) {
          bucket.push([y + 1, x]);
          movedCoordinates[y + 1][x] = true;
        }
      }
      return bucket;
    }, []);

    result += 1;
    if (nextCoordinates.find(([y, x]) => y === maxY && x === maxX)) break;
  }
  if (!movedCoordinates[maxY][maxX]) return -1;
  return result;
}

const testCase = [];
testCase.push({
  maps: [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ],
  answer: 11,
});
testCase.push({
  maps: [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ],
  answer: -1,
});

const runner = () => testCase.forEach(({maps, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(maps);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
