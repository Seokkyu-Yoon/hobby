/* eslint-disable require-jsdoc */
function solution(n, vertex) {
  const edgeInfo = new Array(n+1).fill(null).map(() => []);
  vertex.forEach(([node1, node2]) => {
    edgeInfo[node1].push(node2);
    edgeInfo[node2].push(node1);
  });

  const usedNodes = [1];
  let currNodes = [1];
  while (usedNodes.length < n) {
    currNodes = currNodes.reduce((bucket, currNode) => {
      edgeInfo[currNode].forEach((nextNode) => {
        if (usedNodes.includes(nextNode)) return;
        usedNodes.push(nextNode);
        bucket.push(nextNode);
      });
      return bucket;
    }, []);
  }
  return currNodes.length;
}

const testCase = [];
testCase.push({
  n: 6,
  vertex: [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ],
  result: 3,
});

const runner = () => testCase.forEach(({n, vertex, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, vertex);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
