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

const solution = (current, head=current, max=current.v)=>{
  if (current.next === null || current.next === head) return max;
  if (current.v > max) max = current.v;
  console.log(max);
  return solution(current.next, head, max);
};

module.exports = {
  solution,
};
