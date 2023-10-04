/**
 * 리액트 규칙 모듈
 *
 * @author RWB
 * @since 2023.10.04 Wed 13:23:06
 */
module.exports = {
	extends: [ 'plugin:react/recommended' ],
	rules: {
		'react-hooks/exhaustive-deps': 'off',
		'react/button-has-type': 'off',
		'react/destructuring-assignment': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-curly-brace-presence': [
			'error',
			{
				children: 'never',
				props: 'never'
			}
		],
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': [ 'error', 'tab' ],
		'react/jsx-indent-props': [ 2, 'tab' ],
		'react/jsx-no-useless-fragment': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: true,
				ignoreCase: true,
				multiline: 'last',
				noSortAlphabetically: false,
				reservedFirst: false,
				shorthandFirst: false,
				shorthandLast: true
			}
		],
		'react/no-array-index-key': 'off',
		'react/no-danger': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off'
	},
	settings: { react: { version: 'detect' } }
};