function solution(s, n) {
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  const A = 'A'.charCodeAt(0);
  const Z = 'Z'.charCodeAt(0);

  const isLower = ascii => ascii >= a && ascii <= z;
  const isUpper = ascii => ascii >= A && ascii <= Z;
  const caesarLower = ascii => String.fromCharCode(a + ((ascii - a + n) % 26));
  const caesarUpper = ascii => String.fromCharCode(A + ((ascii - A + n) % 26));

  return s.split(' ').reduce((acc, splited) => {
    acc.push(Array.from(splited).map(value => {
      const ascii = value.charCodeAt(0);
      if(isLower(ascii)) {
        return caesarLower(ascii);
      }
      if(isUpper(ascii)) {
        return caesarUpper(ascii);
      }
      return String.fromCharCode(ascii);
    }).join(''));
    return acc;
  }, []).join(' ');
}

const testCase = [];
testCase.push({
  s: 'AB',
  n: 1,
});
testCase.push({
  s: 'z',
  n: 1,
});
testCase.push({
  s: 'a B z',
  n: 4,
});

const runner = () => testCase.forEach(({s, n}) => {
  console.log(solution(s, n));
});

module.exports = runner;
