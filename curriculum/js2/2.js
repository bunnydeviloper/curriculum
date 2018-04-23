/**
 * Given an array, return an array of the same length
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  a.forEach((e, i) => {
    if (e % 2 != 0) a[i] = 0;
  });
  return a;
};

module.exports = {
  solution,
};
