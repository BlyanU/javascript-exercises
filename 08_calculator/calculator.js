const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for (const num of array) {
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let count = 1;
  for (const num of array) {
    count *= num;
  }
  return count;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let product = 1;
  if (num == 0) {
    return 1;
  }
	for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
