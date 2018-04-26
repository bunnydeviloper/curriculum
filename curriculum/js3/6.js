/*
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true.
 * Example:
 * input: {5:'blah blah',name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
*/
const solution = (o, f, i=0, newObj = {})=>{
  if (i === Object.keys(o).length) return newObj;
  if (f(Object.keys(o)[i], Object.values(o)[i])) {
    newObj[(Object.keys(o)[i])]= Object.values(o)[i];
  }
  return solution(o, f, i+1, newObj);
};

module.exports = {
  solution,
};
