/* eslint-disable no-console */
function getDistDiff(n, connectionMap) {
  const visited = new Set();
  const nextNodes = [1];
  while (nextNodes.length) {
    const nextNode = nextNodes.shift();
    visited.add(nextNode);
    connectionMap[nextNode].forEach((childNode) => {
      if (visited.has(childNode)) return;
      nextNodes.push(childNode);
    });
  }
  // Math.abs((n - visited.size) - visited.size) 방문하지 않은 그룹과 방문한 그룹간의 차이 계산
  return Math.abs(n - 2 * visited.size);
}
function solution(n, wires) {
  const connectionMap = wires.reduce((bucket, [transmission1, transmission2]) => {
    const temp = {};
    temp[transmission1] = new Set(bucket[transmission1]);
    temp[transmission2] = new Set(bucket[transmission2]);
    temp[transmission1].add(transmission2);
    temp[transmission2].add(transmission1);
    return {
      ...bucket,
      ...temp,
    };
  }, {});
  const distanceDiffs = wires.map(([transmission1, transmission2]) => {
    connectionMap[transmission1].delete(transmission2);
    connectionMap[transmission2].delete(transmission1);
    const result = getDistDiff(n, connectionMap);
    connectionMap[transmission1].add(transmission2);
    connectionMap[transmission2].add(transmission1);
    return result;
  });
  return Math.min.apply(null, distanceDiffs);
}

const testCase = [];
testCase.push({
  n: 9,
  wires: [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]],
  result: 3,
});
testCase.push({
  n: 4,
  wires: [[1, 2], [2, 3], [3, 4]],
  result: 0,
});
testCase.push({
  n: 7,
  wires: [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]],
  result: 1,
});

function test() {
  testCase.forEach(({ n, wires, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(n, wires);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
