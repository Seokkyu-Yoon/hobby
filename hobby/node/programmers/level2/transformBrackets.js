/* eslint-disable require-jsdoc */
const isOpen = (value) => value === '(' ? 1 : -1;

const getUV = (p, i) => ({u: p.slice(0, i), v: p.slice(i)});

const fixU = ({u, v}) => {
  const arrU = Array.from(u);
  arrU.pop();
  arrU.shift();
  const fixedU = arrU.map((value) => value === '(' ? ')' : '(').join('');
  return {u: fixedU, v};
};

const completed = (p, solution) => {
  let count = 0;
  let i = Array.from(p).findIndex((value) => {
    count += isOpen(value);
    return count === 0;
  }) + 1;
  if (i === 0) i = p.length;

  const {u, v} = getUV(p, i);
  return [u, solution(v)].join('');
};
const notCompleted = (p, solution) => {
  let count = 0;
  let i = Array.from(p).findIndex((value) => {
    count -= isOpen(value);
    return count === 0;
  }) + 1;
  if (i === 0) i = p.length;
  const {u, v} = fixU(getUV(p, i));
  return ['(', solution(v), ')', u].join('');
};

const solution = (p) => {
  if (p.length === 0) return '';
  return p[0] === '(' ? completed(p, solution) : notCompleted(p, solution);
};

const testCase = [];
testCase.push({
  p: '(()())()',
  result: '(()())()',
});
testCase.push({
  p: ')(',
  result: '()',
});
testCase.push({
  p: '()))((()',
  result: '()(())()',
});
testCase.push({
  p: ')()()()(',
  result: '(((())))',
});

const runner = () => testCase.forEach(({p, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(p);
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
