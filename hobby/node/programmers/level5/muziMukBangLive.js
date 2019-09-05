/* eslint-disable require-jsdoc */
function solution(food_times, k) {
  let datas = food_times.map((count, index) => ({
    seq: index + 1,
    count,
  }));

  let remain = k;
  while (datas.length > 0 && remain > 0) {
    const size = datas.length;
    const minus = Math.floor(remain / size);
    if (minus === 0) break;
    remain %= size;
    datas = datas.reduce((bucket, {seq, count}) => {
      if (count > minus) {
        bucket.push({seq, count: count - minus});
        return bucket;
      }
      remain += minus - count;
      return bucket;
    }, []);
  }
  if (datas.length === 0) return -1;
  return datas[remain].seq;
}

const testCase = [];
testCase.push({
  food_times: [
    3, 1, 2,
  ],
  k: 5,
  result: 1,
});
testCase.push({
  food_times: [
    2, 1, 2,
  ],
  k: 5,
  result: -1,
});
testCase.push({
  food_times: [
    4, 1, 3,
  ],
  k: 6,
  result: 3,
});

const runner = () => testCase.forEach(({food_times, k, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(food_times, k);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
