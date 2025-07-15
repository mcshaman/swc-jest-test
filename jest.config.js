/** @type {import('jest').Config} */
const config = {
	testEnvironment: "node",
	collectCoverageFrom: ["src/**/*.ts"],
	coverageReporters: ["text", "lcov", "html"],
	transform: {
		"^.+\\.ts$": "babel-jest",
	}
};

module.exports = config;
