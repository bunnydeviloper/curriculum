/*
 * findGreatest - Takes in the first node of a
 *     linked list, return the greatest number
 * Example:
 * input:
 *    a = {v: 2};
 *    b = {v: 3};
 *    c = {v: 1};
 *    a.next = b;
 *    b.next = c;
 *    solution(a);
 * output: 3
 * @param {object} node
 * @returns {number}
*/

const solution = (currentNode, max=currentNode.v)=>{
  if (currentNode.v > max) max = currentNode.v;
  console.log(max);
  if (currentNode.next === null) return max;
  return solution(currentNode.next, max);
};

module.exports = {
  solution,
};
