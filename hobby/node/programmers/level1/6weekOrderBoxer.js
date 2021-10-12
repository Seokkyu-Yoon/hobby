/* eslint-disable no-console */
function decriptHead2Head(weights, head2head, iCurr) {
  const arrHead = Array.from(head2head[iCurr]);
  const { loseCount, winCount, winForHeavy } = arrHead.reduce((bucket, state, iTarget) => {
    if (state === 'N') return bucket;
    if (state === 'L') {
      return {
        ...bucket,
        loseCount: bucket.loseCount + 1,
      };
    }
    return {
      ...bucket,
      winCount: bucket.winCount + 1,
      winForHeavy: weights[iTarget] > weights[iCurr] ? bucket.winForHeavy + 1 : bucket.winForHeavy,
    };
  }, { loseCount: 0, winCount: 0, winForHeavy: 0 });
  const totalCount = (winCount + loseCount) || 1;
  return {
    winRate: (100 * winCount) / totalCount,
    winForHeavy,
  };
}

function solution(weights, head2head) {
  const boxers = weights.map((weight, i) => ({
    index: i + 1,
    weight,
    ...decriptHead2Head(weights, head2head, i),
  }));
  boxers.sort((boxer1, boxer2) => {
    if (boxer1.winRate !== boxer2.winRate) return boxer2.winRate - boxer1.winRate;
    if (boxer1.winForHeavy !== boxer2.winForHeavy) return boxer2.winForHeavy - boxer1.winForHeavy;
    if (boxer1.weight !== boxer2.weight) return boxer2.weight - boxer1.weight;
    return boxer1.index - boxer2.index;
  });
  return boxers.map(({ index }) => index);
}

const testCase = [];
testCase.push({
  weights: [50, 82, 75, 120],
  head2head: ['NLWL', 'WNLL', 'LWNW', 'WWLN'],
  result: [3, 4, 1, 2],
});
testCase.push({
  weights: [145, 92, 86],
  head2head: ['NLW', 'WNL', 'LWN'],
  result: [2, 3, 1],
});
testCase.push({
  weights: [60, 70, 60],
  head2head: ['NNN', 'NNN', 'NNN'],
  result: [2, 1, 3],
});

function test() {
  testCase.forEach(({ weights, head2head, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(weights, head2head);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
