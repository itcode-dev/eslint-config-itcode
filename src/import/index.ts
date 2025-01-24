/**
 * ESLint import 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.01.24 Fri 16:55:51
 */

/// <reference types="../../types/eslint-plugin-import" />

import pluginImport from 'eslint-plugin-import';

import type { Linter } from 'eslint';

export default [ {
	plugins: { '@import': pluginImport },
	rules: {
		// 기본 가져오기 유효성 검증
		'@import/default': 'error',
		// export 유효성 검증
		'@import/export': 'error',
		// export는 반드시 하단에 위치
		'@import/exports-last': 'error',
		// import는 반드시 상단에 위치
		'@import/first': 'error',
		// 명명된 import가 정확히 export 인지 검증
		'@import/named': 'error',
		// namespace가 실제로 export 되는지 검증
		'@import/namespace': 'error',
		// import 구문 마지막엔 반드시 줄바꿈
		'@import/newline-after-import': 'error',
		// 절대경로 import 방지
		'@import/no-absolute-path': 'error',
		// deprecated import 방지
		'@import/no-deprecated': 'error',
		// 중복된 import 방지
		'@import/no-duplicates': 'error',
		// 빈 import 방지
		'@import/no-empty-named-blocks': 'error',
		// 기본 import는 이름과 동일하도록 강제
		'@import/no-named-as-default': 'error',
		// 기본 export에서 같은 이름의 속성 접근 방지
		'@import/no-named-as-default-member': 'error',
		// 정렬 강제
		'@import/order': [
			'error',
			{
				alphabetize: {
					caseInsensitive: true,
					order: 'asc'
				},
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'type',
					'unknown'
				],
				named: true,
				'newlines-between': 'always',
				pathGroups: [ {
					group: 'internal',
					pattern: '@kapoo/**',
					position: 'before'
				} ],
				pathGroupsExcludedImportTypes: [ 'builtin' ],
				warnOnUnassignedImports: true
			}
		]
	}
} ] satisfies Linter.Config[];