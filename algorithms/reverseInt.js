/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const MAX_INT = Math.pow(2, 31) -1;
  const MIN_INT = Math.pow(-2, 31);
  let reversed;
  let result;

  const splited = x.toString().split("");
  
  if (splited.length >= 0 && splited[0] === '-') {
    result = parseInt("-" + splited.slice(1).reverse().join(""));
      
    return result > MAX_INT || result < MIN_INT ? 0 : result;
  }
    
  result = parseInt(splited.reverse().join(""));
    
  return result > MAX_INT || result < MIN_INT ? 0 : result;
};




