const removeFromArray = function(arr, ...theArgs) {
  for (let i = 0; i < theArgs.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (theArgs[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
