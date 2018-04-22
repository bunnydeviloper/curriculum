/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, s, c='') => {
  if (n === 0) return c;
  return solution(n-1, s, c + s);
};

module.exports = {
  solution,
};
