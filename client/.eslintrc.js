module.exports = {
	extends: ["react-app", "plugin:prettier/recommended"],
	overrides: [
		{
			files: ["**/*.ts?(x)"],
			parserOptions: {
				project: "./tsconfig.json"
			},
			extends: ["plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
			rules: {
				"@typescript-eslint/no-unused-vars": [
					"error",
					{
						args: "after-used",
						ignoreRestSiblings: false
					}
				]
			}
		}
	]
};
