/* eslint-disable require-jsdoc */
function solution(lines) {
  const checkPoints = new Set();
  const reformedLines = lines.reduce((bucket, line) => {
    const [
      trash,
      dateTime,
      during,
    ] = line.split(' ');
    const [
      hour,
      min,
      sec,
    ] = dateTime.split(':');
    const end = (Number(hour) * 3600 + Number(min) * 60 + Number(sec)) * 1000;
    const start = end - Number(during.slice(0, -1)) * 1000 + 1;
    checkPoints.add(start);
    checkPoints.add(end);
    bucket.push({start, end});
    return bucket;
  }, []);

  return [...checkPoints].reduce((max, point) => {
    const checkSets = [
      {from: point - 999, to: point},
      {from: point, to: point + 999},
    ];
    checkSets.forEach(({from, to}) => {
      const filtered = reformedLines.filter(({start, end}) => {
        return start <= to && end >= from;
      });
      if (filtered.length > max) max = filtered.length;
    });
    return max;
  }, 0);
}

const testCase = [];
testCase.push({
  lines: [
    '2016-09-15 01:00:04.001 2.0s',
    '2016-09-15 01:00:07.000 2s',
  ],
  result: 1,
});
testCase.push({
  lines: [
    '2016-09-15 01:00:04.002 2.0s',
    '2016-09-15 01:00:07.000 2s',
  ],
  result: 2,
});
testCase.push({
  lines: [
    '2016-09-15 20:59:57.421 0.351s',
    '2016-09-15 20:59:58.233 1.181s',
    '2016-09-15 20:59:58.299 0.8s',
    '2016-09-15 20:59:58.688 1.041s',
    '2016-09-15 20:59:59.591 1.412s',
    '2016-09-15 21:00:00.464 1.466s',
    '2016-09-15 21:00:00.741 1.581s',
    '2016-09-15 21:00:00.748 2.31s',
    '2016-09-15 21:00:00.966 0.381s',
    '2016-09-15 21:00:02.066 2.62s',
  ],
  result: 7,
});

const runner = () => testCase.forEach(({lines, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(lines);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
