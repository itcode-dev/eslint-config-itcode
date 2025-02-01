/**
 * ESLint sort-keys-fix 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.01.24 Fri 16:56:40
 */

/// <reference types="../../types/eslint-plugin-sort-keys-fix" />

import pluginSortKeysFix from 'eslint-plugin-sort-keys-fix';

import type { Linter } from 'eslint';

export default {
	plugins: { '@sort-keys-fix': pluginSortKeysFix },
	rules: { '@sort-keys-fix/sort-keys-fix': 'error' }
} satisfies Linter.Config;