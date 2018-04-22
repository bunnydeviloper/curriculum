/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, n=a+1) => {
  if (n % 7 === 0) return n;
  return solution(a, n+1);
};

module.exports = {
  solution,
};
