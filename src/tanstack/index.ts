/**
 * ESLint react-query 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.01.24 Fri 16:57:13
 */

import pluginQuery from '@tanstack/eslint-plugin-query';

import type { Linter } from 'eslint';

export default [ {
	plugins: { '@tanstack/query': pluginQuery },
	rules: {
		// 철저한 디펜던시 강제
		'@tanstack/query/exhaustive-deps': 'error',
		// 불필요한 구조 파괴 객체 선언 방지
		'@tanstack/query/no-rest-destructuring': 'error',
		// 불안정한 디펜던시 선언 방지
		'@tanstack/query/no-unstable-deps': 'warn',
		// 안정적인 QueryClient 선언 강제
		'@tanstack/query/stable-query-client': 'error'
	}
} ] satisfies Linter.Config[];