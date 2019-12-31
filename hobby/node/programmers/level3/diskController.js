/* eslint-disable require-jsdoc */
function solution(jobs = []) {
  const jobLength = jobs.length;
  let requirements = 0;
  let timeSeries = 0;
  while (jobs.length > 0) {
    const minRequire = Math.min.apply(
        null,
        jobs.filter(([burstTime]) =>
          burstTime <= timeSeries,
        ).map((job) => job[1]),
    );
    const jobIndex = jobs.findIndex(([burstTime, require]) =>
      burstTime <= timeSeries && require === minRequire,
    );
    if (jobIndex === -1) {
      timeSeries += 1;
      continue;
    }
    const [burstTime, requirement] = jobs.splice(jobIndex, 1).pop();
    requirements += timeSeries - burstTime + requirement;
    timeSeries += requirement;
  }
  return parseInt(requirements / jobLength);
}

const testCase = [];
testCase.push({
  jobs: [
    [3, 3],
    [1, 3],
    [1, 9],
    [2, 6],
  ],
  answer: 9,
});

const runner = () => testCase.forEach(({jobs, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(jobs);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
