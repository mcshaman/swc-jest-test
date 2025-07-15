const {
	multiply,
	divide,
	gradeCalculator,
	validateUser,
	processPayment,
	processNumbers,
	createUserProfile,
	getDayName,
	safeExecute
} = require('./coverage-demo');

describe('multiply', () => {
	test('should multiply two positive numbers', () => {
		expect(multiply(2, 3)).toBe(6);
	});
});

describe('divide', () => {
	test('should divide two positive numbers', () => {
		expect(divide(6, 2)).toBe(3);
	});
});

describe('gradeCalculator', () => {
	test('should return A for scores 90-100', () => {
		expect(gradeCalculator(90)).toBe('A');
		expect(gradeCalculator(95)).toBe('A');
		expect(gradeCalculator(100)).toBe('A');
	});

	test('should return B for scores 80-89', () => {
		expect(gradeCalculator(80)).toBe('B');
		expect(gradeCalculator(85)).toBe('B');
		expect(gradeCalculator(89)).toBe('B');
	});
});

describe('validateUser', () => {
	test('should return valid for correct user data', () => {
		const user = { name: 'John', email: 'john@example.com', age: 25 };
		const result = validateUser(user);
		expect(result.valid).toBe(true);
		expect(result.user).toEqual(user);
	});

	test('should return error for missing user object', () => {
		const result = validateUser(null);
		expect(result.valid).toBe(false);
		expect(result.error).toBe('User object is required');
	});
});

describe('processPayment', () => {
	const authenticatedUser = { isAuthenticated: true };

	test('should process credit card payment successfully', () => {
		const result = processPayment(500, 'credit', authenticatedUser);
		expect(result.success).toBe(true);
		expect(result.method).toBe('credit');
		expect(result.amount).toBe(500);
	});
});

describe('processNumbers', () => {
	test('should process array of numbers correctly', () => {
		const result = processNumbers([1, 2, 3, 'invalid', 4]);
		expect(result.original).toEqual([1, 2, 3, 'invalid', 4]);
		expect(result.filtered).toEqual([1, 2, 3, 4]);
		expect(result.doubled).toEqual([2, 4, 6, 8]);
		expect(result.sum).toBe(20);
		expect(result.count).toBe(4);
	});
});

describe('createUserProfile', () => {
	test('should create profile for adult user', () => {
		const userData = {
			name: 'John Doe',
			email: 'JOHN@EXAMPLE.COM',
			age: 25,
			preferences: { newsletter: true, marketing: false }
		};
		const profile = createUserProfile(userData);
		
		expect(profile.name).toBe('John Doe');
		expect(profile.email).toBe('john@example.com');
		expect(profile.age).toBe(25);
		expect(profile.subscribedToNewsletter).toBe(true);
		expect(profile.marketingConsent).toBeUndefined();
		expect(profile.isAdult).toBe(true);
		expect(profile.isMinor).toBeUndefined();
		expect(profile.requiresParentalConsent).toBeUndefined();
	});
});

describe('getDayName', () => {
	test('should return correct day names', () => {
		expect(getDayName(1)).toBe('Monday');
		expect(getDayName(2)).toBe('Tuesday');
		expect(getDayName(3)).toBe('Wednesday');
		expect(getDayName(4)).toBe('Thursday');
		expect(getDayName(5)).toBe('Friday');
		expect(getDayName(6)).toBe('Saturday');
		expect(getDayName(7)).toBe('Sunday');
	});
});

describe('safeExecute', () => {
	test('should execute function successfully', () => {
		const fn = () => 'success';
		const result = safeExecute(fn, 'fallback');
		expect(result).toBe('success');
	});

	test('should return fallback value when function throws', () => {
		const fn = () => { throw new Error('test error'); };
		const result = safeExecute(fn, 'fallback');
		expect(result).toBe('fallback');
	});

	test('should throw error for non-function first argument', () => {
		expect(() => safeExecute('not a function', 'fallback'))
			.toThrow('First argument must be a function');
	});
}); 