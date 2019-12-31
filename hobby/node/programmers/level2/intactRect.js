/* eslint-disable require-jsdoc */
const init = (w, h) => {
  const isVertical = w < h;
  let gcd = isVertical ? w : h;

  while (gcd > 1) {
    if (w % gcd === 0 && h % gcd === 0) return {isVertical, gcd};
    gcd--;
  }
  return {isVertical, gcd};
};

const getIgnore = ({width, height, isVertical}) => {
  const max = isVertical ? width : height;

  let result = 0;
  let prevPosition = 0;
  for (let i = 1; i <= max; i++) {
    const currPosition = isVertical ?
          height * i / width :
          width * i / height;

    result += Math.ceil(currPosition) - Math.floor(prevPosition);
    prevPosition = currPosition;
  }
  return result;
};

function solution(w, h) {
  const {
    gcd,
    isVertical,
  } = init(w, h);

  const fixed = {
    width: w / gcd,
    height: h / gcd,
  };
  return w * h - getIgnore({
    ...fixed,
    isVertical,
  }) * gcd;
}

const testCase = [];
testCase.push({
  w: 8,
  h: 12,
  result: 80,
});

const runner = () => testCase.forEach(({w, h, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(w, h);
    // if answer is value use it
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
