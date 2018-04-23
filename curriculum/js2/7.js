/**
 *  Takes in an array and a number,
 *    return the number of elements that matches the number
 * @param {array} a
 * @param {number} b
 * @returns {array}
 */

const solution = (a, n) => {
  let counter = 0;
  a.map(e => {
    if (e === n) counter += 1;
  });
  return counter;
};

module.exports = {
  solution,
};
