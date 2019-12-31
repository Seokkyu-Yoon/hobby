/* eslint-disable require-jsdoc */
const getPreOrder = (tree) => {
  if (!tree.left && !tree.right && !tree.parent) return [1];
  const copiedTree = JSON.parse(JSON.stringify(tree));
  const holder = new Set();
  let node = copiedTree;
  while (node.left || node.right || node.parent) {
    const {id, left, right, parent} = node;
    holder.add(id);
    if (left) {
      left.parent = node;
      node.left = undefined;
      node = left;
      continue;
    }
    if (right) {
      right.parent = node;
      node.right = undefined;
      node = right;
      continue;
    }
    node.parent = undefined;
    node = parent;
  }
  return [...holder];
};
const getPostOrder = (tree) => {
  const copiedTree = JSON.parse(JSON.stringify(tree));
  const holder = new Set();
  let node = copiedTree;
  while (node.left || node.right || node.parent) {
    const {id, left, right, parent} = node;
    if (left) {
      left.parent = node;
      node.left = undefined;
      node = left;
      continue;
    }
    if (right) {
      right.parent = node;
      node.right = undefined;
      node = right;
      continue;
    }
    holder.add(id);
    node.parent = undefined;
    node = parent;
  }
  return [...holder, node.id];
};

function solution(nodeinfo) {
  const sortedNodes = nodeinfo.map(([x, y], index) => ({
    x, y, id: index + 1,
  })).sort((a, b) => {
    if (b.y !== a.y) return b.y - a.y;
    return a.x - b.x;
  });

  const tree = sortedNodes.shift();
  let parents = [tree];
  let area = [{from: 0, to: tree.x - 1}, {from: tree.x + 1, to: 100000}];
  while (sortedNodes.length > 0) {
    const child = sortedNodes.shift();
    const children = [child];
    while (sortedNodes.length > 0 && sortedNodes[0].y === child.y) {
      children.push(sortedNodes.shift());
    }
    area = children.reduce((bucket, child) => {
      const areaIndex = area.findIndex(({from, to}) =>
        child.x >= from && child.x <= to,
      );
      const parent = parents[Math.floor(areaIndex / 2)];
      if (areaIndex % 2) {
        parent.right = child;
      } else {
        parent.left = child;
      }
      const currArea = area[areaIndex];
      bucket.push({from: currArea.from, to: child.x - 1});
      bucket.push({from: child.x + 1, to: currArea.to});
      return bucket;
    }, []);
    parents = children;
  }
  return [getPreOrder(tree), getPostOrder(tree)];
}

const testCase = [];
testCase.push({
  nodeinfo: [
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ],
  result: [
    [7, 4, 6, 9, 1, 8, 5, 2, 3],
    [9, 6, 5, 8, 1, 4, 3, 2, 7],
  ],
});
testCase.push({
  nodeinfo: [
    [5, 3],
  ],
  result: [
    [1],
    [1],
  ],
});

const runner = () => testCase.forEach(({nodeinfo, result}, index) => {
  console.log(`${index + 1}-case:`);
  try {
    const myResult = solution(nodeinfo);
    console.log('  result');
    console.log(myResult);
    console.log('  correct');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
});

module.exports = runner;
