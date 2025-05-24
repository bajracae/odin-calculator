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

const numberbtns = function () {
	displayField = document.querySelector("#display");
	displayField.textContent = "0";
	numButtons = document.querySelectorAll(".numbtn");

	numButtons.forEach((button) => {
		button.addEventListener("click", () => {
			if (operator === "") {
				if (
					firstNumber == 0 ||
					firstNumber == lastResult ||
					displayField.textContent == "0"
				) {
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
		});
	});
};

const operatorbtns = function () {
	opButtons = document.querySelectorAll(".opbtn");

	opButtons.forEach((button) => {
		button.addEventListener("click", () => {
			operator = button.innerHTML;
		});
	});
};

const clearbtn = function () {
	clearButton = document.querySelector("#clearbtn");

	clearButton.addEventListener("click", () => {
		first = "";
		operator = "";
		second = "";
		displayField.textContent = "0";
	});
};

const equalbtn = function () {
	equalButton = document.querySelector("#equalbtn");

	equalButton.addEventListener("click", () => {
		if (firstNumber !== "" && operator == "/" && secondNumber == "0") {
			displayField.textContent = "cannot divide by zero";
			lastResult = "";
			firstNumber = "";
			operator = "";
			secondNumber = "";
		} else if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
			let result = operate(
				parseFloat(firstNumber),
				operator,
				parseFloat(secondNumber)
			);

			if (result % 1 !== 0) {
				result = result.toFixed(2);
			}

			displayField.textContent = result;
			lastResult = result;
			firstNumber = result;
			operator = "";
			secondNumber = "";
		}
	});
};

const backspacebtn = function () {
	backspaceButton = document.querySelector("#backspacebtn");

	backspaceButton.addEventListener("click", () => {
		if (displayField.textContent != "0" && displayField.textContent != "") {
			displayField.textContent = displayField.textContent.slice(0, -1);
		}

		if (operator === "") {
			firstNumber = displayField.textContent;
		} else {
			secondNumber = displayField.textContent;
		}
	});
};

const decimalbtn = function () {
	decimalButton = document.querySelector("#decimalbtn");

	decimalButton.addEventListener("click", () => {
		if (!displayField.textContent.includes(decimalButton.textContent)) {
			displayField.textContent += decimalButton.textContent;
		}

		if (operator == "") {
			firstNumber = displayField.textContent;
		} else {
			secondNumber = displayField.textContent;
		}
	});
};

const signbtn = function () {
	signButton = document.querySelector("#signbtn");

	signButton.addEventListener("click", () => {
		if (displayField.textContent !== "0") {
			if (!displayField.textContent.includes("-")) {
				displayField.textContent = "-" + displayField.textContent;
			} else {
				displayField.textContent.replace("-", "");
			}
		}

		if (operator == "") {
			firstNumber = displayField.textContent;
		} else {
			secondNumber = displayField.textContent;
		}
	});
};

const main = function () {
	numberbtns();
	operatorbtns();
	clearbtn();
	equalbtn();
	backspacebtn();
	decimalbtn();
	signbtn();
};

main();

// Do not edit below this line
module.exports = {
	add,
	subtract,
	multiply,
	divide,
	operate,
};
