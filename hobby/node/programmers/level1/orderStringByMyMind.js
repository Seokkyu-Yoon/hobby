function solution(strings, n) {
  const words = strings.reduce((acc, string) => {
    if(acc[string[n]] === undefined) acc[string[n]] = [];
    acc[string[n]].push(string);
    return acc;
  }, {});
  
  return Object.keys(words).sort().reduce((acc, key) => {
    words[key].sort().forEach((word) => acc.push(word));
    return acc;
  }, []);
}

const testCase = [];
testCase.push({
  strings:['sun', 'bed', 'car'],
  n: 1,
});
testCase.push({
  strings:['abce', 'abcd', 'cdx'],
  n: 2,
});

const runner = () => testCase.forEach(({strings, n}) => {
  console.log(solution(strings, n));
});

module.exports = runner;
