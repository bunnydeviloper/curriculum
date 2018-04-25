/*
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

// Solution using object
const solution = (a, n, i=0, b={}) => {
  if (a.length === 0) return false;
  if (i === a.length) return false;
  if (i < a.length) {
    if (b[(n - a[i])]) { // if (n - a[i]) exist as a key in our object
      return b[(n - a[i])]; // return the value (which is always true)
    }
    b[a[i]] = true;
  }
  return solution(a, n, i+1, b);
};

/* Solution using array and recursion
 * const solution = (a, n, i=0, j=i+1) => {
 *   if (i === a.length) return false;
 *   if (a[i] + a[j] === n) return true;
 *   if (j < a.length) return solution(a, n, i+1, j);
 *   return solution(a, n, i, j+1);
 * };
*/

module.exports = {
  solution,
};
