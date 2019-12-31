/* eslint-disable require-jsdoc */
function solution(N, road, K) {
  const connections = new Array(N+1).fill(null).map(() =>
    new Array(N+1).fill(-1),
  );
  road.forEach(([village1, village2, cValue]) => {
    const pValue = connections[village1][village2];
    if (pValue < 0) {
      connections[village1][village2] = cValue;
      connections[village2][village1] = cValue;
      return;
    }
    const value = Math.min(pValue, cValue);
    connections[village1][village2] = value;
    connections[village2][village1] = value;
  });

  const avaliable = [1];
  const costs = new Array(N+1).fill(-1);
  costs[1] = 0;
  let prevVillages = [1];
  while (true) {
    const nextVillages = prevVillages.reduce((bucket, cIndex) => {
      const prevCost = costs[cIndex];
      connections[cIndex].forEach((value, index) => {
        if (value === -1) return;
        const currCost = prevCost + value;
        if (currCost > K) return;
        const minCost = Math.min(costs[index], currCost);
        if (minCost === -1) {
          costs[index] = currCost;
          avaliable.push(index);
          bucket.push(index);
          return;
        }
        if (costs[index] !== minCost) {
          costs[index] = minCost;
          bucket.push(index);
          if (!avaliable.includes(index)) {
            avaliable.push(index);
          }
          return;
        }
      });
      return bucket;
    }, []);
    if (nextVillages.length < 1) break;
    prevVillages = nextVillages;
  }
  return avaliable.length;
}

const testCase = [];
testCase.push({
  N: 5,
  road: [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  K: 3,
  result: 4,
});
testCase.push({
  N: 6,
  road: [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1],
  ],
  K: 4,
  result: 4,
});

const runner = () => testCase.forEach(({N, road, K, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(N, road, K);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
