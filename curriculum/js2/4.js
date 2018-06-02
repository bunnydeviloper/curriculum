/**
 * Given an array, return the sum of all values
 * @param {array} a
 * @returns {number}
 */

const solution = (a) => {
  if (a.length === 0) return ''; // shouldn't this one return 0 instead?
  return a.reduce((accum, curr) => accum + curr);
};

module.exports = {
  solution,
};
