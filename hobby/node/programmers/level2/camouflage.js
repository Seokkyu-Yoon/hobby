/* eslint-disable require-jsdoc */
function solution(clothes) {
  const categories = clothes.reduce((bucket, [item, type]) => {
    bucket[type] = bucket[type] || [];
    bucket[type].push(item);
    return bucket;
  }, {});

  return Object.keys(categories).reduce((acc, key) => {
    return acc * (categories[key].length + 1);
  }, 1) - 1;
}

const testCase = [];
testCase.push({
  clothes: [
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ],
  result: 5,
});
testCase.push({
  clothes: [
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ],
  result: 3,
});

const runner = () => testCase.forEach(({clothes, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(clothes);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
