/* eslint-disable require-jsdoc */
const removeBridge = (n, costs, bridge, i) => {
  const isVisited = [bridge[0]];
  let currIslands = [bridge[0]];

  while (currIslands.length > 0) {
    currIslands = currIslands.reduce((bucket, currIsland) => {
      costs.forEach(([island1, island2], index) => {
        if (index === i) return;
        if (island1 !== currIsland && island2 !== currIsland) return;
        if (island1 !== currIsland && isVisited.includes(island1)) return;
        if (island2 !== currIsland && isVisited.includes(island2)) return;
        const nextIsland = island1 !== currIsland ? island1 : island2;
        isVisited.push(nextIsland);
        bucket.push(nextIsland);
      });
      return bucket;
    }, []);
  }
  return isVisited.length === n;
};

function solution(n, costs) {
  let result = 0;
  costs.sort((a, b) => b[2] - a[2]);
  for (let i = 0; i < costs.length; i += 1) {
    const bridge = costs[i];
    if (removeBridge(n, costs, bridge, i)) {
      costs.splice(i, 1);
      i -= 1;
      continue;
    }
    result += bridge[2];
  }
  return result;
}

const testCase = [];
testCase.push({
  n: 4,
  costs: [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ],
  result: 4,
});
testCase.push({
  n: 4,
  costs: [
    [0, 1, 1],
    [0, 2, 2],
    [2, 3, 1],
  ],
  result: 4,
});
testCase.push({
  n: 6,
  costs: [
    [0, 1, 5],
    [0, 3, 2],
    [0, 4, 3],
    [1, 4, 1],
    [3, 4, 10],
    [1, 2, 2],
    [2, 5, 3],
    [4, 5, 4],
  ],
  result: 11,
});

const runner = () => testCase.forEach(({n, costs, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, costs);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
