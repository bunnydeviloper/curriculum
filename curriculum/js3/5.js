/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (o, f, i=0)=>{
  if (i === Object.keys(o).length) return; 
  f( Object.keys(o)[i], Object.values(o)[i]);
  return solution(o, f, i+1);
}
module.exports = {
  solution
}
