type Operation = "add" | "subtract" | "multiply" | "divide";

/**
 * Simple calculator function that performs basic math operations
 * @param a - First number
 * @param b - Second number
 * @param operation - Operation to perform
 * @returns Result of the operation
 */
export function calculator(a: number, b: number, operation: string): number {
	// Input validation
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error("Both arguments must be numbers");
	}

	if (!operation || typeof operation !== "string") {
		throw new Error("Operation must be a string");
	}

	switch (operation.toLowerCase() as Operation) {
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
 * @param num - Number to check
 * @returns True if number is even, false otherwise
 */
export function isEven(num: number): boolean {
	if (typeof num !== "number") {
		throw new Error("Input must be a number");
	}
	return num % 2 === 0;
}

/**
 * Function to reverse a string
 * @param str - String to reverse
 * @returns Reversed string
 */
export function reverseString(str: string): string {
	if (typeof str !== "string") {
		throw new Error("Input must be a string");
	}
	return str.split("").reverse().join("");
}
