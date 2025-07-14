/**
 * Simple calculator function that performs basic math operations
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {string} operation - Operation to perform ('add', 'subtract', 'multiply', 'divide')
 * @returns {number} - Result of the operation
 */
function calculator(a, b, operation) {
	// Input validation
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error("Both arguments must be numbers");
	}

	if (!operation || typeof operation !== "string") {
		throw new Error("Operation must be a string");
	}

	switch (operation.toLowerCase()) {
		case "add":
			return a + b;
		case "subtract":
			return a - b;
		case "multiply":
			return a * b;
		case "divide":
			if (b === 0) {
				throw new Error("Cannot divide by zero");
			}
			return a / b;
		default:
			throw new Error("Invalid operation. Must be: add, subtract, multiply, or divide");
	}
}

/**
 * Function to check if a number is even
 * @param {number} num - Number to check
 * @returns {boolean} - True if number is even, false otherwise
 */
function isEven(num) {
	if (typeof num !== "number") {
		throw new Error("Input must be a number");
	}
	return num % 2 === 0;
}

/**
 * Function to reverse a string
 * @param {string} str - String to reverse
 * @returns {string} - Reversed string
 */
function reverseString(str) {
	if (typeof str !== "string") {
		throw new Error("Input must be a string");
	}
	return str.split("").reverse().join("");
}

module.exports = {
	calculator,
	isEven,
	reverseString,
};
