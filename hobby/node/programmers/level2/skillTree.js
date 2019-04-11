/* eslint-disable camelcase */
/**
 * This function is called when check skill_trees available
 * @param {string} skill
 * @param {Array<string>} skill_trees
 * @return {Number} Available skill trees
 */
function solution(skill, skill_trees) {
  const skill_procedure = {};
  Array.from(skill).forEach((skill, index) => skill_procedure[skill] = index);
  return skill_trees.reduce((acc, skill_tree) => {
    const tree = Array.from(skill_tree).reduce((acc, skill) => {
      if (skill_procedure[skill] !== undefined) {
        acc.push(skill_procedure[skill]);
      }
      return acc;
    }, []);

    const checkTree = (tree, index = 0) => {
      if (index === tree.length) return 1;
      if (tree[index] !== index) return 0;
      return checkTree(tree, index + 1);
    };
    return acc + checkTree(tree);
  }, 0);
}

const testCase = [];
testCase.push({
  skill: 'CBD',
  skill_trees: ['BACDE', 'CBADF', 'AECB', 'BDA'],
});

const runner = () => testCase.forEach(({skill, skill_trees}) => {
  console.log(solution(skill, skill_trees));
});

module.exports = runner;
