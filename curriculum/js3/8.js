/*
 * isCircular - Takes in the first node of a
 *     linked list, return if the linked-list
 *     loops into itself
 * Example:
 * input:
 *    a = {v: 2};
 *    b = {v: 3};
 *    c = {v: 1};
 *    a.next = b;
 *    b.next = c;
 *    c.next = a;
 *    solution(a);
 * output: true
 * @param {object} node
 * @returns {boolean}
*/

const solution = (current, head = current)=>{
  if (!current.next) return false;
  if (current.next == head) return true;
  return solution(current.next, head);
};

module.exports = {
  solution,
};

