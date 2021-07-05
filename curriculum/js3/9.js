/*
 * findNum - Takes in the root node of a tree and
 *     a number, return a node with the same value
 * Example:
 * input:
 *    a = {v: 2};
 *    b = {v: 3};
 *    c = {v: 1};
 *    a.children = [b,c]
 *    solution(a, 3);
 * output: b
 * @param {object} node
 * @returns {object}
*/

// Hint: BFS or DFS from the teaching doc
const findNum = (tree, number) => {
  if (!tree.length) return;
  const n = tree.shift();
  if (n.v === number) return n;
  return findNum(tree.concat(n.children), number);
};

const solution = (tree, n) => {
  return findNum([tree], n);
};

module.exports = {
  solution,
};


