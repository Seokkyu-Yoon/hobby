function solution(n, lost, reserve) {
  const clothes = (function initalize(n, lost, reserve, index = 1, acc = []) {
    if (index > n) return acc;
    let cloth = 1;
    if (lost.includes(index)) cloth--;
    if (reserve.includes(index)) cloth++;
    acc.push(cloth);
    return initalize(n, lost, reserve, index + 1, acc);
  })(n, lost, reserve);

  const attender = (function share(n, clothes, index = 1) {
    if (index >= n) return clothes;
    if (clothes[index-1] == 0 && clothes[index] == 2) {
      clothes[index]--;
      clothes[index-1]++;
    }
    if (clothes[index] == 0 && clothes[index-1] == 2) {
      clothes[index-1]--;
      clothes[index]++;
    }
    if (clothes[index] == 0 && clothes[index+1] == 2) {
      clothes[index+1]--;
      clothes[index]++;
    }
    if (clothes[index+1] == 0 && clothes[index] == 2) {
      clothes[index]--;
      clothes[index+1]++;
    }
    return share(n, clothes, index + 1);
  })(n - 1, clothes).reduce((acc, cloth) => acc += cloth > 0, 0);

  return attender;
}

const testCase = [];
testCase.push({
  n: 5,
  lost: [2, 4],
  reserve: [1, 3, 5],
});
testCase.push({
  n: 5,
  lost: [2, 4],
  reserve: [3],
});
testCase.push({
  n: 3,
  lost: [3],
  reserve: [1],
});

const runner = () => testCase.forEach(({n, lost, reserve}) => {
  console.log(solution(n, lost, reserve));
});

module.exports = runner;
