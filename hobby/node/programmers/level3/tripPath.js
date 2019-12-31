/* eslint-disable require-jsdoc */
const compareString = (a, b, wordLength) => {
  for (let i = 0; i < wordLength; i += 1) {
    if (a[0][i] === b[0][i]) continue;
    if (a[0][i] > b[0][i]) return 1;
    return -1;
  }
  for (let i = 0; i < wordLength; i += 1) {
    if (a[1][i] === b[1][i]) continue;
    if (a[1][i] > b[1][i]) return 1;
    return -1;
  }
  return 0;
};

function solution(tickets) {
  const wordLength = tickets[0][0].length;
  const connections = tickets.sort((a, b) =>
    compareString(a, b, wordLength),
  ).reduce((bucket, [departure, arrival]) => {
    const connection = bucket.find(({departure: signed}) =>
      signed === departure,
    );
    if (connection) {
      connection.arrivals.push(arrival);
      return bucket;
    }
    bucket.push({departure, arrivals: [arrival]});
    return bucket;
  }, []);

  let seq = ['ICN'];
  let finals = [];
  let loop = tickets.length;
  let currLocate = 'ICN';
  while (loop-- > 0) {
    let connection = connections.find(({departure}) =>
      departure === currLocate,
    );

    if (!connection || connection.arrivals.length === 0) {
      let branch = undefined;
      let index = seq.length - 1;
      while (!branch) {
        index -= 1;
        const branchLocate = seq[index];
        const currSeq = connections.find(({departure}) =>
          departure === branchLocate,
        );
        if (currSeq.arrivals.length > 0) {
          branch = branchLocate;
        }
      }
      finals = [...seq.slice(index + 1), ...finals];
      seq = seq.slice(0, index + 1);
      connection = connections.find(({departure}) =>
        departure === branch,
      );
    }

    const arrival = connection.arrivals.shift();
    seq.push(arrival);
    currLocate = arrival;
  }
  return [...seq, ...finals];
}

const testCase = [];
testCase.push({
  tickets: [
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
  ],
  answer: [
    'ICN',
    'JFK',
    'HND',
    'IAD',
  ],
});
testCase.push({
  tickets: [
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
  ],
  answer: [
    'ICN',
    'ATL',
    'INC',
    'SFO',
    'ATL',
    'SFO',
  ],
});
testCase.push({
  tickets: [
    ['ICN', 'JFK'],
    ['ICN', 'CAN'],
    ['HND', 'IAD'],
    ['CAN', 'HND'],
    ['HND', 'ICN'],
    ['JFK', 'HND'],
  ],
  answer: [
    'ICN',
    'CAN',
    'HND',
    'ICN',
    'JFK',
    'HND',
    'IAD',
  ],
});
testCase.push({
  tickets: [
    ['ICN', 'AAA'],
    ['ICN', 'AAA'],
    ['AAA', 'AAB'],
    ['AAA', 'AAB'],
    ['AAB', 'AAC'],
    ['AAC', 'AAD'],
    ['AAC', 'AAD'],
    ['AAD', 'AAE'],
    ['AAD', 'AAE'],
    ['AAE', 'AAF'],
    ['AAB', 'ABA'],
    ['ABA', 'ICN'],
    ['AAE', 'ACA'],
    ['ACA', 'AAC'],
    ['AAA', 'AAB'],
    ['AAB', 'ABA'],
    ['ABA', 'AAA'],
  ],
  answer: [
    'ICN',
    'AAA',
    'AAB',
    'ABA',
    'AAA',
    'AAB',
    'ABA',
    'ICN',
    'AAA',
    'AAB',
    'AAC',
    'AAD',
    'AAE',
    'ACA',
    'AAC',
    'AAD',
    'AAE',
    'AAF',
  ],
});

const runner = () => testCase.forEach(({tickets, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(tickets);
    console.log(`  result: ${myResult}\n  correct:${answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
