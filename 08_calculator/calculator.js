const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let total = arr.reduce((sum, current) => sum + current, 0);
  return total;
};

const multiply = function(arr) {
  let product = arr.reduce((num1, num2) => num1 * num2);
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if ( num === 0) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }
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
