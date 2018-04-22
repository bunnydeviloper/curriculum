/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = (n, f) => {
  if (n === 0) return;
  f();
  return solution(n-1, f);
};

module.exports = {
  solution,
};
