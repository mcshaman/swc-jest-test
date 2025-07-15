/** @type {import('jest').Config} */
const config = {
	testEnvironment: "node",
	collectCoverageFrom: ["src/**/*.ts"],
	coverageReporters: ["text", "text-summary", "html"],
	transform: {
		"^.+\\.ts$": "@swc/jest",
	},
};

module.exports = config;
