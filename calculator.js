firstNumber = "";
operator = "";
secondNumber = "";
lastResult = "";

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
			result = null; // Questioning if this is even needed but will come back later
	}
	return result;
};

const getNumber = function () {
	displayField = document.querySelector("#display");
	displayField.textContent = "0";
	numButtons = document.querySelectorAll(".numbtn");

	numButtons.forEach((button) => {
		button.addEventListener("click", () => {
			if (operator === "") {
				if (firstNumber == 0 || firstNumber == lastResult) {
					displayField.textContent = button.textContent;
				} else {
					displayField.textContent += button.textContent;
				}
				firstNumber = displayField.textContent;
			} else {
				if (secondNumber == 0) {
					displayField.textContent = button.textContent;
				} else {
					displayField.textContent += button.textContent;
				}
				secondNumber = displayField.textContent;
			}
			console.log(firstNumber, operator, secondNumber);
		});
	});
};

const getOperator = function () {
	opButtons = document.querySelectorAll(".opbtn");

	opButtons.forEach((button) => {
		button.addEventListener("click", () => {
			operator = button.innerHTML;
		});
	});
};

const clearCalc = function () {
	clearButton = document.querySelector("#clearbtn");

	clearButton.addEventListener("click", () => {
		first = "";
		operator = "";
		second = "";
		displayField.textContent = "0";
	});
};

const equal = function () {
	equalbutton = document.querySelector("#equalbtn");

	equalbutton.addEventListener("click", () => {
		if (firstNumber !== "" && operator == "/" && secondNumber == "0") {
			displayField.textContent = "Dividing by zero is a sin";
			lastResult = "";
			firstNumber = "";
			operator = "";
			secondNumber = "";
		} else if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
			const result = operate(
				parseInt(firstNumber),
				operator,
				parseInt(secondNumber)
			);

			displayField.textContent = result;
			lastResult = result;
			firstNumber = result;
			operator = "";
			secondNumber = "";
		}
	});
};

const backspace = function () {
	backspacebutton = document.querySelector("#backspacebtn");

	backspacebutton.addEventListener("click", () => {
		displayField.textContent = displayField.textContent.slice(0, -1);
		if (operator === "") {
			firstNumber = displayField.textContent;
		} else {
			secondNumber = displayField.textContent;
		}
	});
};

const main = function () {
	getNumber();
	getOperator();
	clearCalc();
	equal();
	backspace();

	console.log(parseInt(firstNumber), operator, parseInt(secondNumber));
};

main();

// const newLogic = function () {
// 	displayField = document.querySelector("#display");
// 	numButtons = document.querySelectorAll(".numbtn");
// 	opButtons = document.querySelectorAll(".opbtn");
// 	clearButton = document.querySelector("#clearbtn");

// 	first = 0;
// 	operator = "";
// 	second = 0;

// 	numButtons.forEach((button) => {
// 		button.addEventListener("click", () => {
// 			displayField.textContent += button.innerHTML;
// 		});
// 	});

// 	clearButton.addEventListener("click", () => {
// 		first = 0;
// 		operator = "";
// 		second = 0;
// 		displayField.textContent = "";
// 	});

// 	opButtons.forEach((button) => {
// 		button.addEventListener("click", () => {
// 			first = displayField.textContent;
// 			operator = button.innerHTML;
// 		});
// 	});
// };

// newLogic();

// const logic = function () {
// 	displayField = document.querySelector("#display");
// 	numbuttons = document.querySelectorAll(".numbtn");
// 	opbuttons = document.querySelectorAll(".opbtn");
// 	equalbutton = document.querySelector("#equalbtn");
// 	cleanbutton = document.querySelector("#clearbtn");

// 	validOperators = ["+", "-", "*", "/"];

// 	first = null;
// 	operator = "";
// 	second = null;

// 	numbuttons.forEach((button) => {
// 		button.addEventListener("click", () => {
// 			displayField.value += button.innerText;
// 		});
// 	});

// 	opbuttons.forEach((opbutton) => {
// 		opbutton.addEventListener("click", () => {
// 			if (first == null) {
// 				first = displayField.value;
// 			}
// 			operator = opbutton.innerText;
// 			displayField.value = null;
// 		});
// 	});

// 	equalbutton.addEventListener("click", () => {
// 		if (second == null && displayField.value != "") {
// 			second = displayField.value;
// 		}
// 		results = operate(parseInt(first), operator, parseInt(second));
// 		displayField.value = results;
// 		first = displayField.value;
// 		operator = null;
// 		second = null;
// 	});

// 	cleanbutton.addEventListener("click", () => {
// 		displayField.value = null;
// 		first = null;
// 		operator = "";
// 		second = null;
// 	});
// };

// logic();

// Do not edit below this line
module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate,
};
