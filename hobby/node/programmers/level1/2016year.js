const solution = (a, b) => {
  const days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const dateOfMonth = {1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31};
  const getDay = (a, b, i = 1) => {
    if(i == a) return b % 7;
    b += dateOfMonth[i];
    return getDay(a, b, i + 1);
  };
  return days[getDay(a, b) % 7];
};

const testCase = [];
testCase.push({
  a: 5,
  b: 24,
});

const runner = () => testCase.forEach(({a, b}) => {
  console.log(solution(a, b));
});

module.exports = runner;
