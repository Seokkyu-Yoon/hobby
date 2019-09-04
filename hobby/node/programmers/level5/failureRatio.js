/* eslint-disable require-jsdoc */
function solution(N, stages) {
  const stageInfo = stages.reduce((bucket, stay) => {
    for (let i = 1; i < stay; i += 1) {
      bucket[i].clears += 1;
    }
    bucket[stay].stays += 1;
    return bucket;
  }, new Array(N+2).fill(null).map(() => ({
    clears: 0,
    stays: 0,
  })));

  const failures = stageInfo.map(({clears, stays}, stage) => ({
    stage,
    failure: stays + clears === 0 ? 0 : stays / (stays + clears),
  }));
  failures.sort((a, b) => {
    if (b.failure !== a.failure) {
      return b.failure - a.failure;
    };
    return a.stage - b.stage;
  });

  return failures.reduce((bucket, {stage}) => {
    if (stage === 0 || stage === N + 1) return bucket;
    bucket.push(stage);
    return bucket;
  }, []);
}

const testCase = [];
testCase.push({
  N: 5,
  stages: [2, 1, 2, 6, 2, 4, 3, 3],
  result: [3, 4, 2, 1, 5],
});
testCase.push({
  N: 4,
  stages: [4, 4, 4, 4, 4],
  result: [4, 1, 2, 3],
});

const runner = () => testCase.forEach(({N, stages, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(N, stages);
    console.log(`  result: ${myResult}\tcorrect:${result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
