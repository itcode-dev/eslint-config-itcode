/**
 * ESLint TailwindCSS 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.06.25 Wed 10:33:10
 */

import pluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';

import type { Linter } from 'eslint';

export default {
	plugins: { '@better-tailwindcss': pluginBetterTailwindcss },
	rules: {
		// 일관된 클래스 정렬 강제
		'@better-tailwindcss/enforce-consistent-class-order': 'error',
		// 일관된 클래스 래핑 강제
		'@better-tailwindcss/enforce-consistent-line-wrapping': 'error',
		// 일관된 CSS 변수 호출 방식 강제
		'@better-tailwindcss/enforce-consistent-variable-syntax': 'error',
		// 출동하는 클래스 스타일링 방지
		'@better-tailwindcss/no-conflicting-classes': 'error',
		// 중복된 클래스 방지
		'@better-tailwindcss/no-duplicate-classes': 'error',
		// 불필요 공백 제거
		'@better-tailwindcss/no-unnecessary-whitespace': 'error'
	}
} satisfies Linter.Config;