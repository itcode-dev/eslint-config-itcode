/**
 * ESLint 설정 인덱스 모듈
 *
 * @author RWB
 * @since 2025.01.21 Tue 17:52:54
 */


import baseConfig from './base';
import importConfig from './import';
import reactHooksConfig from './react-hooks';
import sortKeysFixConfig from './sort-keys-fix';
import stylisticConfig from './stylistic';
import tailwindcssConfig from './tailwindcss';
import tanstackConfig from './tanstack';
import tseslintConfig from './tseslint';
import unusedImportsConfig from './unused-imports';

import type { Linter } from 'eslint';
import type { ConfigArray } from 'typescript-eslint';

interface Config
{
	baseConfig: Linter.Config[];
	importConfig: Linter.Config[];
	reactHooksConfig: Linter.Config[];
	sortKeysFixConfig: Linter.Config[];
	stylisticConfig: Linter.Config[];
	tailwindcssConfig: Linter.Config[];
	tanstackConfig: Linter.Config[];
	tseslintConfig: ConfigArray;
	unusedImportsConfig: Linter.Config[];
}

const config: Config = {
	baseConfig,
	importConfig,
	reactHooksConfig,
	sortKeysFixConfig,
	stylisticConfig,
	tailwindcssConfig,
	tanstackConfig,
	tseslintConfig,
	unusedImportsConfig
};

export default config;