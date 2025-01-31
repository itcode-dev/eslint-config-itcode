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
	...itcodeConfig.configs.baseConfig,
	...itcodeConfig.configs.importConfig,
	...itcodeConfig.configs.sortKeysFixConfig,
	...itcodeConfig.configs.stylisticConfig,
	...itcodeConfig.configs.tseslintConfig
];