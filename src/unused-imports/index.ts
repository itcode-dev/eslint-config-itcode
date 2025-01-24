/**
 * ESLint unused-imports 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.01.24 Fri 16:57:30
 */

import pluginUnusedImports from 'eslint-plugin-unused-imports';

import type { Linter } from 'eslint';

export default [ {
	plugins: { '@unused-imports': pluginUnusedImports },
	rules: { '@unused-imports/no-unused-imports': 'error' }
} ] satisfies Linter.Config[];