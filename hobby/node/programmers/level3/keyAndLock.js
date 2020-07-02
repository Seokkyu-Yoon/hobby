/* eslint-disable require-jsdoc */
function solve(lock, key, keyStartAt) {
  const N = lock.length;
  const copiedLock = JSON.parse(JSON.stringify(lock));
  key.forEach((keyRow, indexRowKey) => {
    const indexRowLock = keyStartAt.indexRow + indexRowKey;
    if (indexRowLock < 0) return;
    if (indexRowLock >= N) return;
    keyRow.forEach((keyValue, indexColKey) => {
      const indexColLock = keyStartAt.indexCol + indexColKey;
      if (indexColLock < 0) return;
      if (indexColLock >= N) return;
      copiedLock[indexRowLock][indexColLock] += keyValue;
    });
  });
  const isUnmatched = copiedLock.some((row) => row.some((value) => value !== 1));
  return !isUnmatched;
}

function register(lock) {
  const N = lock.length;
  return function canUnlock(key) {
    const M = key.length;
    for (let indexRow = 1 - M; indexRow < N; indexRow += 1) {
      for (let indexCol = 1 - M; indexCol < N; indexCol += 1) {
        if (solve(lock, key, { indexRow, indexCol })) return true;
      }
    }
    return false;
  };
}

function rotate90(key) {
  const M = key.length;
  return key.map((row, rIndex) => row.map((dump, cIndex) => key[M - 1 - cIndex][rIndex]));
}

function solution(key, lock) {
  if (lock.map((row) => row.every((value) => value)).every((value) => value)) return true;
  const keyRotate0 = key;
  const keyRotate90 = rotate90(keyRotate0);
  const keyRotate180 = rotate90(keyRotate90);
  const keyRotate270 = rotate90(keyRotate180);

  const canUnlock = register(lock);
  return [keyRotate0, keyRotate90, keyRotate180, keyRotate270].some(canUnlock);
}

const testCase = [];
testCase.push({
  key: [[0, 0, 0], [1, 0, 0], [0, 1, 1]],
  lock: [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
  result: true,
});
testCase.push({
  key: [[0, 0, 0], [1, 0, 0], [0, 1, 1]],
  lock: [[1, 0, 1], [1, 1, 0], [1, 1, 1]],
  result: true,
});
testCase.push({
  key: [[1]],
  lock: [[1, 1, 1], [1, 1, 1], [1, 1, 0]],
  result: true,
});
testCase.push({
  key: [[1, 0], [0, 1]],
  lock: [[1, 1, 1], [1, 1, 0], [1, 1, 0]],
  result: false,
});
testCase.push({
  key: [[1, 0], [0, 1]],
  lock: [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
  result: true,
});
testCase.push({
  key: [[1, 1], [1, 1]],
  lock: [[1, 1, 1], [1, 0, 1], [1, 1, 1]],
  result: false,
});
testCase.push({
  key: [[1, 1], [1, 1]],
  lock: [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
  result: true,
});

const runner = () => testCase.forEach(({ key, lock, result }, index) => {
  console.log(` - ${index + 1}-case:`);
  try {
    const myResult = solution(key, lock);
    // if answer is value use it
    console.log(`* myResult: ${myResult}`);
    console.log(`* correct: ${myResult === result}`);

    // if answer is list use it
    // console.log('* result');
    // console.log(myResult);
    // console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
