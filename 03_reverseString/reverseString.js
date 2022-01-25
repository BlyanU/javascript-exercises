const reverseString = function(str) {
  let tmpString = '';

  for (let i = str.length - 1; i >= 0; i--){
    tmpString += str.charAt(i);
  }
  
  return tmpString;
};

// Do not edit below this line
module.exports = reverseString;
