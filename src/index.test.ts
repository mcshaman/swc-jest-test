import { calculator } from "./index";

describe("calculator", () => {
	describe("addition", () => {
		test("should add two positive numbers", () => {
			expect(calculator(2, 3, "add")).toBe(5);
		});

		test("should add negative numbers", () => {
			expect(calculator(-2, -3, "add")).toBe(-5);
		});

		test("should add positive and negative numbers", () => {
			expect(calculator(5, -3, "add")).toBe(2);
		});

		test("should handle zero", () => {
			expect(calculator(0, 5, "add")).toBe(5);
			expect(calculator(5, 0, "add")).toBe(5);
		});
	});

	describe("subtraction", () => {
		test("should subtract two positive numbers", () => {
			expect(calculator(5, 3, "subtract")).toBe(2);
		});

		test("should subtract negative numbers", () => {
			expect(calculator(-2, -3, "subtract")).toBe(1);
		});

		test("should handle zero", () => {
			expect(calculator(5, 0, "subtract")).toBe(5);
			expect(calculator(0, 5, "subtract")).toBe(-5);
		});
	});

	describe("multiplication", () => {
		test("should multiply two positive numbers", () => {
			expect(calculator(2, 3, "multiply")).toBe(6);
		});

		test("should multiply negative numbers", () => {
			expect(calculator(-2, -3, "multiply")).toBe(6);
		});

		test("should handle zero", () => {
			expect(calculator(5, 0, "multiply")).toBe(0);
			expect(calculator(0, 5, "multiply")).toBe(0);
		});
	});

	describe("division", () => {
		// left blank for now
	});

	describe("case insensitive operations", () => {
		test("should work with uppercase operation names", () => {
			expect(calculator(2, 3, "ADD")).toBe(5);
			expect(calculator(5, 3, "SUBTRACT")).toBe(2);
			expect(calculator(2, 3, "MULTIPLY")).toBe(6);
			expect(calculator(6, 2, "DIVIDE")).toBe(3);
		});

		test("should work with mixed case operation names", () => {
			expect(calculator(2, 3, "Add")).toBe(5);
			expect(calculator(5, 3, "Subtract")).toBe(2);
		});
	});

	describe("error handling", () => {
		test("should throw error for non-numeric first argument", () => {
			expect(() => calculator("2" as any, 3, "add")).toThrow("Both arguments must be numbers");
		});

		test("should throw error for non-numeric second argument", () => {
			expect(() => calculator(2, "3" as any, "add")).toThrow("Both arguments must be numbers");
		});

		test("should throw error for missing operation", () => {
			// @ts-expect-error - Testing invalid input
			expect(() => calculator(2, 3)).toThrow("Operation must be a string");
		});

		test("should throw error for non-string operation", () => {
			expect(() => calculator(2, 3, 123 as any)).toThrow("Operation must be a string");
		});

		test("should throw error for invalid operation", () => {
			expect(() => calculator(2, 3, "invalid")).toThrow(
				"Invalid operation. Must be: add, subtract, multiply, or divide",
			);
		});
	});
}); 