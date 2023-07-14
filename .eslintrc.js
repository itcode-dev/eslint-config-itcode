module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'eslint:recommended',
		'plugin:import/recommended'
	],
	ignorePatterns: [ 'node_modules' ],
	parserOptions: { warnOnUnsupportedTypeScriptVersion: false },
	plugins: [ 'sort-keys-fix' ],
	rules: {
		'array-bracket-spacing': [
			'error',
			'always',
			{
				arraysInArrays: false,
				objectsInArrays: false
			}
		],
		'brace-style': 'off',
		'class-methods-use-this': 'off',
		'comma-dangle': [ 'error', 'never' ],
		'eol-last': [ 'error', 'never' ],
		'import/extensions': 'off',
		'import/named': 'off',
		'import/no-anonymous-default-export': 'off',
		'import/no-cycle': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-named-as-default': 'off',
		'import/no-unresolved': 'off',
		'import/order': [
			'error',
			{
				alphabetize: {
					caseInsensitive: true,
					order: 'asc'
				},
				groups: [
					'external',
					'builtin',
					'internal',
					'sibling',
					'parent',
					'index'
				],
				'newlines-between': 'always'
			}
		],
		'import/prefer-default-export': 'off',
		indent: [ 'error', 'tab' ],
		'linebreak-style': 'off',
		'max-len': 'off',
		'no-await-in-loop': 'off',
		'no-console': 'off',
		'no-lonely-if': 'off',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'no-restricted-exports': 'off',
		'no-return-assign': 'off',
		'no-shadow': 'off',
		'no-tabs': [ 'error', { allowIndentationTabs: true }],
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'object-curly-newline': [
			'error',
			{
				ExportDeclaration: 'never',
				ImportDeclaration: 'never',
				ObjectExpression: {
					minProperties: 3,
					multiline: true
				},
				ObjectPattern: 'never'
			}
		],
		'require-jsdoc': 'off',
		'sort-keys-fix/sort-keys-fix': 'error'
	},
	settings: { react: { version: 'detect' } }
};