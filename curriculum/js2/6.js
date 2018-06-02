/**
 * Given an array, return an array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return a.filter( (e) => e > 5 );
};

module.exports = {
  solution,
};
