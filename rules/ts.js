/**
 * 타입스크립트 규칙 모듈
 *
 * @author RWB
 * @since 2023.10.04 Wed 13:23:15
 */
module.exports = {
	overrides: [
		{
			files: [ '*.ts', '*.tsx' ],
			rules: { 'no-undef': 'off' }
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: { warnOnUnsupportedTypeScriptVersion: false },
	plugins: [ '@typescript-eslint' ],
	rules: {
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{ 'ts-ignore': 'allow-with-description' }
		],
		'@typescript-eslint/brace-style': [ 'error', 'allman' ],
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/member-delimiter-style': [ 'error', {
			multiline: {
				delimiter: 'semi',
				requireLast: true
			},
			multilineDetection: 'brackets',
			singleline: {
				delimiter: 'semi',
				requireLast: true
			}
		}],
		'@typescript-eslint/member-ordering': [ 'error', {
			default: [
				'field',
				'signature',
				'constructor',
				'method'
			]
		}],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unused-vars': 'error'
	},
	settings: { 'import/parsers': { '@typescript-eslint/parser': [ '.ts', '.tsx' ] } }
};