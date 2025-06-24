/**
 * ESLint better-tailwindcss 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.06.24 Tue 15:12:29
 */

import pluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';

import type { Linter } from 'eslint';

export default {
	files: [ '**/*.[jt]sx' ],
	plugins: { '@better-tailwindcss': pluginBetterTailwindcss },
	rules: {
		// 클래스 정렬 강제
		'@better-tailwindcss/enforce-consistent-class-order': 'error',
		// 일관된 클래스 줄바꿈 강제
		'@better-tailwindcss/enforce-consistent-line-wrapping': 'error',
		// 일관된 CSS 변수 호출 강제
		'@better-tailwindcss/enforce-consistent-variable-syntax': 'error',
		// 클래스 스타일 충돌 방지
		'@better-tailwindcss/no-conflicting-classes': 'error',
		// 클래스 중복 방지
		'@better-tailwindcss/no-duplicate-classes': 'error',
		// 불필요 공백 제거
		'@better-tailwindcss/no-unnecessary-whitespace': 'error'
	}
} satisfies Linter.Config;