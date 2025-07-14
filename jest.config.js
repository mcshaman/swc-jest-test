/** @type {import('jest').Config} */
const config = {
	testEnvironment: "node",
	collectCoverageFrom: ["src/**/*.js"],
	coverageReporters: ["text", "lcov", "html"],
};

module.exports = config;
