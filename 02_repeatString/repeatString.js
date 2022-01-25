const repeatString = function(str, num) {
  let tmpString = "";
  
  if (num < 0) {
    return 'ERROR';
  }

  for (let i = 0; i < num; i++) {
    tmpString += str;
  }

  return tmpString;
};

// Do not edit below this line
module.exports = repeatString;
