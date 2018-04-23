/**
 * Given an array, return array of the same length where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  a.forEach((e, i) => {
    if (e <= 5) a[i] = 0;
  })
  return a;
};

module.exports = {
  solution,
};
