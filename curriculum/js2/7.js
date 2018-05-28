/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, n) => {
  return a.filter( (e) => e === n).length;
};

module.exports = {
  solution,
};
