function solution(k, dungeons, r = 0) {
  if (dungeons.length === 0) return r;

  return Math.max.apply(null, dungeons.map(([needs, spend], idx) => {
    const kNew = k - spend;
    const dungeonsNew = [
      ...dungeons.slice(0, idx),
      ...dungeons.slice(idx + 1),
    ];
    return solution(kNew, dungeonsNew.filter(([need, spend]) => need <= kNew), r + 1);
  }));
}

const testCase = [];
testCase.push({
  k: 80,
  dungeons: [[80, 20], [50, 40], [30, 10]],
  result: 3,
});

function test() {
  testCase.forEach(({ k, dungeons, result }, index) => {
    console.log(` - ${index + 1}-case:`);
    try {
      const myResult = solution(k, dungeons);
      console.log('* myResult');
      console.log(myResult);
      console.log(`* correct: ${JSON.stringify(myResult) === JSON.stringify(result)}`);
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = test;
