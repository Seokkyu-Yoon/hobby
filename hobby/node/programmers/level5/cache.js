/* eslint-disable require-jsdoc */
function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  let answer = 0;
  const cache = new Array(cacheSize);
  cities.forEach((city) => {
    const upperedCity = city.toUpperCase();
    const cityIndex = cache.indexOf(upperedCity);
    if (cityIndex < 0) {
      cache.shift();
      cache.push(upperedCity);
      answer += 5;
      return;
    }
    cache.splice(cityIndex, 1);
    cache.push(upperedCity);
    answer += 1;
  });
  return answer;
}

const testCase = [];
testCase.push({
  cacheSize: 3,
  cities: `Jeju, Pangyo, Seoul, NewYork, LA, Jeju, Pangyo, Seoul, NewYork, LA`.split(', '),
  result: 50,
});
testCase.push({
  cacheSize: 3,
  cities: `Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul`.split(', '),
  result: 21,
});
testCase.push({
  cacheSize: 2,
  cities: `Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome`.split(', '),
  result: 60,
});
testCase.push({
  cacheSize: 5,
  cities: `Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome`.split(', '),
  result: 52,
});
testCase.push({
  cacheSize: 2,
  cities: `Jeju, Pangyo, NewYork, newyork`.split(', '),
  result: 16,
});
testCase.push({
  cacheSize: 0,
  cities: `Jeju, Pangyo, Seoul, NewYork, LA`.split(', '),
  result: 25,
});

const runner = () => testCase.forEach(({cacheSize, cities, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(cacheSize, cities);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
