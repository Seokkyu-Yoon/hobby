/* eslint-disable no-useless-escape */
/* eslint-disable require-jsdoc */
function getOperators(expression) {
  return [...new Set(expression.match(/[\*\-\+]/g))];
}

function getCombinations(operators) {
  if (operators.length === 1) return [operators];

  const combinations = [];
  operators.forEach((operatorSelected, selectedIndex) => {
    const filteredOperators = [
      ...operators.slice(0, selectedIndex),
      ...operators.slice(selectedIndex + 1),
    ];
    getCombinations(filteredOperators).forEach((combination) => {
      combinations.push([operatorSelected, ...combination]);
    });
  });
  return combinations;
}

function calculate(expression, combination) {
  let currExpression = `(${expression})`;
  currExpression = currExpression.replace(/\-/g, ')-(');
  currExpression = currExpression.replace(/\+/g, ')+(');
  currExpression = currExpression.replace(/\*/g, ')*(');
  combination.forEach((operator) => {
    const currRegExp = new RegExp(`(\\(-*[0-9]+\\))\\${operator}(\\(-*[0-9]+\\))`);
    let matched = currExpression.match(currRegExp);
    while (matched !== null) {
      const [
        matchedAll,
        frontNum,
        tailNum,
      ] = [...matched];

      let cal;
      if (operator === '*') {
        cal = Number(frontNum.replace(/[\(\)]/g, '')) * Number(tailNum.replace(/[\(\)]/g, ''));
      } else if (operator === '+') {
        cal = Number(frontNum.replace(/[\(\)]/g, '')) + Number(tailNum.replace(/[\(\)]/g, ''));
      } else if (operator === '-') {
        cal = Number(frontNum.replace(/[\(\)]/g, '')) - Number(tailNum.replace(/[\(\)]/g, ''));
      }

      const { index } = matched;
      const frontExpression = currExpression.slice(0, index);
      const tailExpression = currExpression.slice(index + matchedAll.length);
      currExpression = `${frontExpression}(${cal})${tailExpression}`;
      matched = currExpression.match(currRegExp);
    }
  });
  return Math.abs(Number(currExpression.replace(/[\(\)]/g, '')));
}

function solution(expression) {
  const operators = getOperators(expression);
  const combinations = getCombinations(operators);
  return Math.max.apply(
    null,
    combinations.map((combination) => calculate(expression, combination)),
  );
}

const testCase = [];
testCase.push({
  expression: '100-200*300-500+20',
  result: 60420,
});
testCase.push({
  expression: '50*6-3*2',
  result: 300,
});

const runner = () => testCase.forEach(({ expression, result }, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(expression);
    // if answer is value use it
    console.log(`  result: ${myResult}\tcorrect:${myResult === result}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
