/**
 * This function is called when calculate job completed count
 * @param {Array<Number>} progresses
 * @param {Array<Number>} speeds
 * @return {Number} Number of job fetch
 */
function solution(progresses, speeds) {
  const progressTimes = progresses
      .map((progress, index) =>
        Math.ceil((100-progress)/speeds[index]));

  const getResult = (
      progressTimes,
      index = 0,
      frontJobTime = 0,
      count = 0,
      acc = [],
  ) => {
    if (progressTimes.length === index) {
      acc.push(count);
      return acc;
    }
    if (frontJobTime === 0) {
      frontJobTime = progressTimes[index];
      return getResult(progressTimes, index + 1, frontJobTime, count + 1, acc);
    }
    if (progressTimes[index] > frontJobTime) {
      acc.push(count);
      return getResult(progressTimes, index + 1, progressTimes[index], 1, acc);
    }
    return getResult(progressTimes, index + 1, frontJobTime, count + 1, acc);
  };

  return getResult(progressTimes);
}

const testCase = [];
testCase.push({
  progresses: [93, 30, 55],
  speeds: [1, 30, 5],
});
testCase.push({
  progresses: [40, 93, 30, 55, 60, 65],
  speeds: [60, 1, 30, 5, 10, 7],
});
testCase.push({
  progresses: [93, 30, 55, 60, 40, 65],
  speeds: [1, 30, 5, 10, 60, 7],
});


const runner = () => testCase.forEach(({progresses, speeds}) => {
  console.log(solution(progresses, speeds));
});

module.exports = runner;
