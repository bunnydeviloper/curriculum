/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (n, s='') => {
  if (n === 0) return s;
  return solution(n-1, s + 'hello');
};

module.exports = {
  solution,
};
