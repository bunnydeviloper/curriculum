/**
 * mostCommon - takes in array, return most common number
 * @param {array} arr
 * @param return {number}
 */

const solution = (arr, i=0, obj={}, objKey)=>{
  if (i === arr.length) return obj;
  if (i < arr.length) {
    objKey = arr[i];
    // if key doesn't exist, value will be 0
    // (This is prevention for falsy, 0, '', NaN, or undefined)
    if (!obj[objKey]) obj[objKey] = 0;
  }
  obj[objKey] += 1;
  solution(arr, i+1, obj, objKey);
  const c = Math.max(...Object.values(obj));
  return +Object.keys(obj).filter( (k) => obj[k] === c);
};

module.exports = {
  solution,
};
