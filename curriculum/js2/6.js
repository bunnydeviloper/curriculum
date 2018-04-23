/**
 * Given an array, return an array of numbers larger than 5
 * @param {array} a
 * @returns {array}
 */

const solution = (a) => {
  let b = [];
  a.forEach((e) => {
    if (e > 5) b.push(e);
  });
  return b;
};

module.exports = {
  solution,
};
