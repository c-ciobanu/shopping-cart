module.exports = {
	extends: ["react-app", "plugin:prettier/recommended"],
	overrides: [
		{
			files: ["**/*.ts?(x)"],
			parserOptions: {
				project: "./tsconfig.json"
			},
			extends: [
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:import/typescript"
			],
			plugins: ["import"],
			rules: {
				"@typescript-eslint/no-unused-vars": [
					"error",
					{
						args: "after-used",
						ignoreRestSiblings: false
					}
				],
				"import/order": [
					"error",
					{
						groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
						"newlines-between": "always",
						alphabetize: {
							order: "asc",
							caseInsensitive: true
						}
					}
				]
			}
		}
	],
	settings: {
		"import/resolver": {
			node: {
				paths: ["src"]
			}
		}
	}
};
