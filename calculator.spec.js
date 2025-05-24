const calculator = require("./calculator");

describe("add", () => {
	test("adds 0 and 0", () => {
		expect(calculator.add(0, 0)).toBe(0);
	});

	test("adds 2 and 2", () => {
		expect(calculator.add(2, 2)).toBe(4);
	});

	test("adds positive numbers", () => {
		expect(calculator.add(2, 6)).toBe(8);
	});
});

describe("subtract", () => {
	test("subtracts numbers", () => {
		expect(calculator.subtract(10, 4)).toBe(6);
	});

	test("subtracts negative numbers", () => {
		expect(calculator.subtract(-10, -4)).toBe(-6);
	});

	test("subtracts numbers of mixed parity", () => {
		expect(calculator.subtract(-8, 7)).toBe(-15);
	});
});

describe("multiply", () => {
	test("multiplies two numbers", () => {
		expect(calculator.multiply(2, 4)).toBe(8);
	});

	test("multiplies two negative numbers", () => {
		expect(calculator.multiply(-2, -4)).toBe(8);
	});

	test("multiplies a positive and negative number", () => {
		expect(calculator.multiply(-2, 4)).toBe(-8);
	});
});

describe("divide", () => {
	test("divides two numbers", () => {
		expect(calculator.divide(4, 2)).toBe(2);
	});

	test("divides two negative numbers", () => {
		expect(calculator.divide(-4, -2)).toBe(2);
	});

	test("divides a positive with negative number", () => {
		expect(calculator.divide(4, -2)).toBe(-2);
	});

	test("divides a negative with positive number", () => {
		expect(calculator.divide(-4, 2)).toBe(-2);
	});

	test("divides by zero", () => {
		expect(calculator.divide(4, 0)).toBe(Infinity);
	});
});

describe("operate", () => {
	test("add two numbers", () => {
		expect(calculator.operate(4, "+", 2)).toBe(6);
	});

	test("subtract two numbers", () => {
		expect(calculator.operate(4, "-", 2)).toBe(2);
	});

	test("multiple two numbers", () => {
		expect(calculator.operate(4, "*", 2)).toBe(8);
	});

	test("divide two numbers", () => {
		expect(calculator.operate(4, "/", 2)).toBe(2);
	});

	test("unknown operator", () => {
		expect(calculator.operate(4, "&", 2)).toBe(NaN);
	});
});
