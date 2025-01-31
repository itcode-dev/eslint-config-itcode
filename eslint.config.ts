import tseslint from 'typescript-eslint';

import itcodeConfig from './src';

export default [
	{ ignores: [ 'dist/**/*' ] },
	{
		files: [
			'**/*.ts',
			'**/*.tsx',
			'**/*.cts',
			'**/*.mts'
		],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: [ 'tsconfig.json' ],
				tsconfigRootDir: import.meta.dirname
			}
		}
	},
	...itcodeConfig.baseConfig,
	...itcodeConfig.importConfig,
	...itcodeConfig.sortKeysFixConfig,
	...itcodeConfig.stylisticConfig,
	...itcodeConfig.tseslintConfig
];