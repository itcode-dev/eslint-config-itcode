/**
 * ESLint react-hooks 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.01.24 Fri 16:56:31
 */

/// <reference types="../../types/eslint-plugin-react-hooks" />

import pluginReactHooks from 'eslint-plugin-react-hooks';

import type { Linter } from 'eslint';

export default {
	files: [
		'**/*.jsx',
		'**/*.tsx'
	],
	plugins: { '@react-hooks': pluginReactHooks },
	rules: {
		// 철저한 디펜던시 배열 권고
		'@react-hooks/exhaustive-deps': 'error',
		// react hook 규칙에 위배되는 코드 방지
		'@react-hooks/rules-of-hooks': 'error',
		// 불안정한 디펜던시 배열 선언 방지
		'@tanstack/query/no-unstable-deps': 'warn',
		// 안정적인 QueryClient 선언 강제
		'@tanstack/query/stable-query-client': 'error'
	}
} satisfies Linter.Config;