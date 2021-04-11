module.exports = {
	roots: ["<rootDir>/src"],
	modulePaths: ["<rootDir>/src"],
	testMatch: ["<rootDir>/src/**/__tests__/**/*.js", "<rootDir>/src/**/*.{spec,test}.js"],
	collectCoverageFrom: ["src/**/*.js", "!src/libs/*"],
	coverageThreshold: {
		global: {
			statements: 75,
			branches: 75,
			functions: 75,
			lines: 75
		}
	}
};
