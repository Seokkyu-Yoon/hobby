/* eslint-disable no-console */
function isInt(value) {
  return Math.round(value) === value;
}
function getIntersection([a1, b1, c1], [a2, b2, c2]) {
  const denominator = a1 * b2 - a2 * b1;
  const numeratorX = b1 * c2 - b2 * c1;
  const numeratorY = a2 * c1 - a1 * c2;

  if (denominator === 0) return null; // 평행 혹은 일치
  const x = numeratorX / denominator;
  const y = numeratorY / denominator;
  if (!isInt(x) || !isInt(y)) return null; // 교점이 정수가 아님
  return { x, y };
}
function solution(lines) {
  let minX = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;
  const intersections = lines.reduce((bucket, line, i) => {
    for (let iCurr = i + 1; iCurr < lines.length; iCurr += 1) {
      const intersection = getIntersection(line, lines[iCurr]);
      if (intersection !== null) {
        bucket.push(intersection);
        minX = Math.min(minX, intersection.x);
        maxX = Math.max(maxX, intersection.x);
        minY = Math.min(minY, intersection.y);
        maxY = Math.max(maxY, intersection.y);
      }
    }
    return bucket;
  }, []);
  const result = new Array(maxY - minY + 1).fill(0).map(() => new Array(maxX - minX + 1).fill('.'));
  intersections.forEach(({ x, y }) => {
    result[maxY - y][x - minX] = '*';
  });
  return result.map((row) => row.join(''));
}

const testCase = [];
testCase.push({
  line: [[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]],
  result: ['....*....', '.........', '.........', '*.......*', '.........', '.........', '.........', '.........', '*.......*'],
});
testCase.push({
  line: [[0, 1, -1], [1, 0, -1], [1, 0, 1]],
  result: ['*.*'],
});
testCase.push({
  line: [[1, -1, 0], [2, -1, 0]],
  result: ['*'],
});
testCase.push({
  line: [[1, -1, 0], [2, -1, 0], [4, -1, 0]],
  result: ['*'],
});

function test() {
  testCase.forEach(({ line, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(line);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
