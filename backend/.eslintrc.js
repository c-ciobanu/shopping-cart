module.exports = {
	env: {
		es6: true,
		node: true,
		jest: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module"
	},
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	plugins: ["import"],
	rules: {
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
};
