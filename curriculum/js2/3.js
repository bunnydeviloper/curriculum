/**
 * Given an array, return an array of the same length
 *   where all elements that are not prime is changed to 1
 * @param {array} a
 * @returns {array}
 */

const isPrime = (a, b=2) => {
    if (a === b) return a;
    if (a === 1 || (a % b) === 0) return 1;
    return isPrime(a, b+1);
};

const solution = (a) => {
  a.map((e, i) => {
    a[i] = isPrime(e);
  });
  return a;
};

module.exports = {
  solution,
};
