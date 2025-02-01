/**
 * ESLint TailwindCSS 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.01.24 Fri 16:57:04
 */

import pluginTailwindcss from 'eslint-plugin-tailwindcss';

import type { Linter } from 'eslint';

export default {
	plugins: { '@tailwindcss': pluginTailwindcss },
	rules: {
		// className 정렬 강제
		'@tailwindcss/classnames-order': 'error',
		// 중첩 - 연산 방지
		'@tailwindcss/enforces-negative-arbitrary-values': 'error',
		// 축약형 강제
		'@tailwindcss/enforces-shorthand': 'error',
		// TailwindCSS 2 마이그레이션 강제
		'@tailwindcss/migration-from-tailwind-2': 'error',
		// 같은 속성을 건드리는 className 방지
		'@tailwindcss/no-contradicting-classname': 'error',
		// 불필요한 선언 방식 방지
		'@tailwindcss/no-unnecessary-arbitrary-value': 'error'
	}
} satisfies Linter.Config;