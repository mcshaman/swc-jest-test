/**
 * Module demonstrating various code patterns for coverage testing
 */

interface User {
	name: string;
	email: string;
	age: number;
	isAuthenticated?: boolean;
}

interface UserProfile {
	id: string;
	name: string;
	email: string;
	age: number;
	preferences: Record<string, any>;
	createdAt: Date;
	subscribedToNewsletter?: boolean;
	marketingConsent?: boolean;
	isAdult?: boolean;
	isMinor?: boolean;
	requiresParentalConsent?: boolean;
}

interface ValidationResult {
	valid: boolean;
	error?: string;
	user?: User;
}

interface PaymentResult {
	success: boolean;
	method: string;
	amount: number;
}

interface ProcessNumbersResult {
	original: any[];
	filtered: number[];
	doubled: number[];
	sum: number;
	count: number;
}

interface UserPreferences {
	newsletter?: boolean;
	marketing?: boolean;
}

// Const function declaration
export const multiply = (a: number, b: number): number => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error('Both arguments must be numbers');
	}
	return a * b;
};

// Anonymous function assigned to const
export const divide = function(a: number, b: number): number {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error('Both arguments must be numbers');
	}
	if (b === 0) {
		throw new Error('Cannot divide by zero');
	}
	return a / b;
};

// Function with multiple branches and complex logic
export const gradeCalculator = (score: number): string => {
	if (typeof score !== 'number') {
		throw new Error('Score must be a number');
	}
	
	if (score < 0 || score > 100) {
		throw new Error('Score must be between 0 and 100');
	}
	
	if (score >= 90) {
		return 'A';
	} else if (score >= 80) {
		return 'B';
	} else if (score >= 70) {
		return 'C';
	} else if (score >= 60) {
		return 'D';
	} else {
		return 'F';
	}
};

// Function with nested conditions and early returns
export const validateUser = (user: User | null): ValidationResult => {
	if (!user) {
		return { valid: false, error: 'User object is required' };
	}
	
	if (!user.name || typeof user.name !== 'string') {
		return { valid: false, error: 'Valid name is required' };
	}
	
	if (!user.email || typeof user.email !== 'string') {
		return { valid: false, error: 'Valid email is required' };
	}
	
	if (!user.age || typeof user.age !== 'number') {
		return { valid: false, error: 'Valid age is required' };
	}
	
	if (user.age < 13) {
		return { valid: false, error: 'User must be at least 13 years old' };
	}
	
	if (user.age > 120) {
		return { valid: false, error: 'Invalid age' };
	}
	
	return { valid: true, user };
};

// Function with complex conditional logic
export const processPayment = (amount: number, paymentMethod: string, user: User): PaymentResult => {
	// Validate amount
	if (typeof amount !== 'number' || amount <= 0) {
		throw new Error('Invalid amount');
	}
	
	// Validate payment method
	if (!paymentMethod || typeof paymentMethod !== 'string') {
		throw new Error('Invalid payment method');
	}
	
	// Check user authentication
	if (!user || !user.isAuthenticated) {
		throw new Error('User must be authenticated');
	}
	
	// Process based on payment method
	if (paymentMethod === 'credit') {
		if (amount > 1000) {
			throw new Error('Credit card limit exceeded');
		}
		return { success: true, method: 'credit', amount };
	} else if (paymentMethod === 'debit') {
		if (amount > 500) {
			throw new Error('Debit card limit exceeded');
		}
		return { success: true, method: 'debit', amount };
	} else if (paymentMethod === 'paypal') {
		if (amount < 1) {
			throw new Error('Minimum payment amount is $1');
		}
		return { success: true, method: 'paypal', amount };
	} else {
		throw new Error('Unsupported payment method');
	}
};

// Function with array methods and callbacks
export const processNumbers = (numbers: any[]): ProcessNumbersResult => {
	if (!Array.isArray(numbers)) {
		throw new Error('Input must be an array');
	}
	
	const filtered = numbers.filter(num => typeof num === 'number');
	const doubled = filtered.map(num => num * 2);
	const sum = doubled.reduce((acc, num) => acc + num, 0);
	
	return {
		original: numbers,
		filtered,
		doubled,
		sum,
		count: filtered.length
	};
};

// Function with object destructuring and complex logic
export const createUserProfile = (userData: User & { preferences?: UserPreferences }): UserProfile => {
	const { name, email, age, preferences = {} } = userData;
	
	if (!name || !email || !age) {
		throw new Error('Name, email, and age are required');
	}
	
	const profile: UserProfile = {
		id: Date.now().toString(),
		name: name.trim(),
		email: email.toLowerCase(),
		age,
		preferences,
		createdAt: new Date()
	};
	
	// Add optional fields based on preferences
	if (preferences.newsletter) {
		profile.subscribedToNewsletter = true;
	}
	
	if (preferences.marketing) {
		profile.marketingConsent = true;
	}
	
	if (age >= 18) {
		profile.isAdult = true;
	} else {
		profile.isMinor = true;
		profile.requiresParentalConsent = true;
	}
	
	return profile;
};

// Function with switch statement
export const getDayName = (dayNumber: number): string => {
	if (typeof dayNumber !== 'number') {
		throw new Error('Day number must be a number');
	}
	
	if (dayNumber < 1 || dayNumber > 7) {
		throw new Error('Day number must be between 1 and 7');
	}
	
	switch (dayNumber) {
		case 1:
			return 'Monday';
		case 2:
			return 'Tuesday';
		case 3:
			return 'Wednesday';
		case 4:
			return 'Thursday';
		case 5:
			return 'Friday';
		case 6:
			return 'Saturday';
		case 7:
			return 'Sunday';
		default:
			throw new Error('Invalid day number');
	}
};

// Function with try-catch and async-like patterns
export const safeExecute = <T>(fn: () => T, fallback: T): T => {
	if (typeof fn !== 'function') {
		throw new Error('First argument must be a function');
	}
	try {
		return fn();
	} catch (error) {
		if (typeof fallback === 'function') {
			return fallback(error);
		}
		return fallback;
	}
};
