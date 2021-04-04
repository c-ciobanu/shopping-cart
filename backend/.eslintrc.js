module.exports = {
	extends: ["plugin:prettier/recommended"],
	env: {
		es6: true,
		node: true
	},
	overrides: [
		{
			files: ["**/*.ts"],
			parser: "@typescript-eslint/parser",
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
	]
};
