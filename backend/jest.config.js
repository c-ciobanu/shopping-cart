module.exports = {
	roots: ["<rootDir>/src"],
	modulePaths: ["<rootDir>/src"],
	testMatch: ["<rootDir>/src/**/__tests__/**/*.ts", "<rootDir>/src/**/*.{spec,test}.ts"],
	transform: {
		"^.+\\.ts$": "ts-jest"
	},
	collectCoverageFrom: [
		"src/**/*.ts",
		"!src/**/*.d.ts",
		"!src/functions/index.ts",
		"!src/**/requestSchema.ts",
		"!src/libs/*"
	],
	coverageThreshold: {
		global: {
			statements: 75,
			branches: 75,
			functions: 75,
			lines: 75
		}
	}
};
