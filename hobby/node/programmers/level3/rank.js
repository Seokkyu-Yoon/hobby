/* eslint-disable require-jsdoc */
function solution(n, results) {
  const wholeBorad = new Array(n).fill(null)
      .map(() => new Array(n).fill(false));
  results.forEach(([winner, loser]) => {
    wholeBorad[winner-1][loser-1] = true;
  });

  let count = 0;
  for (let i = 0; i < n; i += 1) {
    const dones = new Array(n).fill(false);
    dones[i] = true;

    let winners = wholeBorad.reduce((bucket, playerBoard, player) => {
      if (playerBoard[i]) {
        dones[player] = true;
        bucket.push(player);
      }
      return bucket;
    }, []);
    while (winners.length > 0) {
      winners = winners.reduce((bucket, winner) => {
        wholeBorad.forEach((playerBoard, player) => {
          if (playerBoard[winner] && !dones[player]) {
            dones[player] = true;
            bucket.push(player);
          }
        });
        return bucket;
      }, []);
    }

    let losers = wholeBorad[i].reduce((bucket, result, player) => {
      if (result) {
        bucket.push(player);
        dones[player] = true;
      }
      return bucket;
    }, []);
    while (losers.length > 0) {
      losers = losers.reduce((bucket, loser) => {
        wholeBorad[loser].forEach((result, player) => {
          if (result && !dones[player]) {
            dones[player] = true;
            bucket.push(player);
          }
        });
        return bucket;
      }, []);
    }
    if (dones.filter((value) => value).length === n) count += 1;
  }
  return count;
}

const testCase = [];
testCase.push({
  n: 5,
  results: [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ],
  answer: 2,
});

const runner = () => testCase.forEach(({n, results, answer}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(n, results);
    console.log(`  result: ${myResult}\tcorrect:${myResult === answer}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
