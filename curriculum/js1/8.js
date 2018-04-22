/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, i= Math.min(a,b)) => {
  if (Math.min(a,b) % i === 0 && 0 === Math.max(a,b) % i) return i;
  return solution(a, b, i-1);
};

module.exports = {
  solution,
};
