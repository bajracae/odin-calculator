const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const multiply = function (a, b) {
	return a * b;
};

const divide = function (a, b) {
	return a / b;
};

const operate = function (a, operator, b) {
	switch (operator) {
		case "+":
			result = add(a, b);
			break;
		case "-":
			result = subtract(a, b);
			break;
		case "*":
			result = multiply(a, b);
			break;
		case "/":
			result = divide(a, b);
			break;
		default:
			result = NaN; // Questioning if this is even needed but will come back later
	}
	return result;
};



// Do not edit below this line
module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate,
};
