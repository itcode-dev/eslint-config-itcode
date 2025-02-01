/**
 * ESLint 설정 인덱스 모듈
 *
 * @author RWB
 * @since 2025.01.21 Tue 17:52:54
 */

import pkg from '../package.json';

import baseConfig from './base';
import importConfig from './import';
import nextConfig from './next';
import reactConfig from './react';
import reactHooksConfig from './react-hooks';
import sortKeysFixConfig from './sort-keys-fix';
import stylisticConfig from './stylistic';
import tailwindcssConfig from './tailwindcss';
import tanstackConfig from './tanstack';
import tseslintConfig from './tseslint';
import unusedImportsConfig from './unused-imports';

import type { Linter } from 'eslint';
import type { ConfigArray } from 'typescript-eslint';

interface Configs
{
	/**
	 * 기본 설정
	 */
	baseConfig: Linter.Config;

	/**
	 * import 설정
	 */
	importConfig: Linter.Config;

	/**
	 * next 설정
	 */
	nextConfig: Linter.Config;

	/**
	 * react 설정
	 */
	reactConfig: Linter.Config;

	/**
	 * react-hooks 설정
	 */
	reactHooksConfig: Linter.Config;

	/**
	 * sort-keys-fix 설정
	 */
	sortKeysFixConfig: Linter.Config;

	/**
	 * stylistic 설정
	 */
	stylisticConfig: Linter.Config;

	/**
	 * TailwindCSS 설정
	 */
	tailwindcssConfig: Linter.Config;

	/**
	 * react-query 설정
	 */
	tanstackConfig: Linter.Config;

	/**
	 * typescript 설정
	 */
	tseslintConfig: ConfigArray[number];

	/**
	 * unused-import 설정
	 */
	unusedImportsConfig: Linter.Config;
}

interface ItcodeConfig
{
	/**
	 * 버전
	 */
	version: string;

	/**
	 * 설정
	 */
	configs: Configs;
}

const itcodeConfig: ItcodeConfig = {
	configs: {
		baseConfig,
		importConfig,
		nextConfig,
		reactConfig,
		reactHooksConfig,
		sortKeysFixConfig,
		stylisticConfig,
		tailwindcssConfig,
		tanstackConfig,
		tseslintConfig,
		unusedImportsConfig
	},
	version: pkg.version
};

export default itcodeConfig;