/**
 * Given an array, return array of the same length where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  return a.map( (e) => e <= 5 ? 0 : e );
};

module.exports = {
  solution,
};
