import tseslint from 'typescript-eslint';

import baseConfig from './src/base';
import importConfig from './src/import';
import sortKeysFixConfig from './src/sort-keys-fix';
import stylisticConfig from './src/stylistic';
import tseslintConfig from './src/tseslint';

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
	baseConfig,
	importConfig,
	sortKeysFixConfig,
	stylisticConfig,
	tseslintConfig
];