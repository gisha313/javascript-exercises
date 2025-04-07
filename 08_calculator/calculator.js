const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((curr, x) => curr + x, 0);
};

const multiply = function(arr) {
  return arr.reduce((curr, x) => curr * x, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0 || a === 1) return 1;
  let factorial = 1;
  for (let i = 2; i <= a; i++) factorial *= i;
  return factorial;
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
