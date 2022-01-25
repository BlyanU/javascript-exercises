const sumAll = function(a, b) {
  let sum = 0;
  let small;
  let large;

  if (a < 0 || b < 0) {
    return 'ERROR';
  } else if (typeof a != 'number' || typeof b != 'number') {
    return 'ERROR';
  }

  if (a < b) {
    small = a;
    large = b;
  } else {
    small = b;
    large = a;
  }

  for (let i = small; i <= large; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
