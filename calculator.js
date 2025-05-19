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

const logic = function () {
	displayField = document.querySelector("#display");
	buttons = document.querySelectorAll(".btn");
	opbuttons = document.querySelectorAll(".opbtn");
	equalbutton = document.querySelector("#equalbtn");
	cleanbutton = document.querySelector("#clearbtn");

	validOperators = ["+", "-", "*", "/"];

	first = null;
	operator = "";
	second = null;

	opbuttons.forEach((opbutton) => {
		opbutton.addEventListener("click", () => {
			if (first == null) {
				first = displayField.value;
			}
			operator = opbutton.innerText;
			displayField.value = null;
		});
	});

	equalbutton.addEventListener("click", () => {
		if (second == null) {
			second = displayField.value;
		}
		console.log(first, operator, second);
		results = operate(parseInt(first), operator, parseInt(second));
		displayField.value = results;
		second = displayField.value;
	});

	cleanbutton.addEventListener("click", () => {
		displayField.value = null;
		first = null;
		operator = "";
		second = null;
	});

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			displayField.value += button.innerText;

			// if (validOperators.includes(button.innerText)) {
			// 	console.log(displayField.value);
			// 	if (first == null) {
			// 		first = displayField.value;
			// 	}
			// 	operator = button.innerText;
			// 	displayField.value = null;
			// } else if (button.innerText == "=") {
			// 	if (second == null) {
			// 		second = displayField.value;
			// 	}
			// 	console.log(first, operator, second);
			// 	results = operate(parseInt(first), operator, parseInt(second));
			// 	displayField.value = results;
			// 	second = displayField.value;
			// } else if (button.innerText == "clear") {
			// 	displayField.value = null;
			// 	first = 0;
			// 	operator = "";
			// 	second = 0;
			// } else {
			// 	displayField.value += button.innerText;
			// }
		});
	});
};

logic();

// const displayLogic = function () {
// 	displayField = document.querySelector("#display");
// 	buttons = document.querySelectorAll(".btn");

// 	buttons.forEach((button) => {
// 		button.addEventListener("click", () => {
// 			console.log(parseInt(button.innerText));
// 			if (typeof parseInt(button.innerText) === "number") {
// 				displayField.value += button.innerText;
// 			} else if (typeof parseInt(button.innerText) === NaN) {
// 				console.log("operator", button.innerText);
// 			}
// 		});
// 	});
// };

// displayLogic();

// const clearLogic = function () {
// 	displayField = document.querySelector("#display");
// 	clearButton = document.querySelector("#clearbtn");

// 	clearButton.addEventListener("click", () => {
// 		displayField.value = null;
// 	});
// };
// clearLogic();

// const operatorLogic = function () {
// 	operatorButtons = document.querySelector(".operatorbtn");

// 	operatorButtons.forEach((button) => {
// 		button.addEventListener("click", () => {
// 			return button.innerText;
// 		});
// 	});
// };

// const makeCalculation = function (a, operator, b) {
// 	console.log(operate(a, operator, b));
// };

// const calculatorLogic = function() {
// 	buttonLogic();

// 	while(True) {

// 	}
// 	// Get the first number, ends when user selects an operator
// 	// Get the second number, ends when user selects "="
// }

// calculatorLogic()

// Do not edit below this line
module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate,
};
