/**
 * ESLint next 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.02.01 Sat 22:40:00
 */

/// <reference types="../../types/@next/eslint-plugin-next" />

import pluginNext from '@next/eslint-plugin-next';

import type { Linter } from 'eslint';

export default {
	plugins: { '@next/next': pluginNext },
	rules: {
		// font-display 설정을 통한 폰트 로드 제어 방식 강제
		'@next/next/google-font-display': 'error',
		// Google Fonts pre-load 강제
		'@next/next/google-font-preconnect': 'error',
		// 인라인 script id 강제
		'@next/next/inline-script-id': 'error',
		// GA 적용 시 next/script 사용 강제
		'@next/next/next-script-for-ga': 'error',
		// 모듈 변수 할당 방지
		'@next/next/no-assign-module-variable': 'error',
		// 비동기 CSR 컴포넌트 방지
		'@next/next/no-async-client-component': 'error',
		// beforeInteractive 스크립트는 head 안에 위치하도록 강제
		'@next/next/no-before-interactive-script-outside-document': 'error',
		// style 태그 방지
		'@next/next/no-css-tags': 'error',
		// document 컴포넌트 import 방지
		'@next/next/no-document-import-in-page': 'error',
		// 헤드 중복 방지
		'@next/next/no-duplicate-head': 'error',
		// head 대신 next/head 사용 강제
		'@next/next/no-head-element': 'error',
		// _document에서 next/head 사용 방지
		'@next/next/no-head-import-in-document': 'error',
		// next/link 사용 강제
		'@next/next/no-html-link-for-pages': 'error',
		// next/image 사용 강제
		'@next/next/no-img-element': 'error',
		// 페이지 내 폰트 설정 방지
		'@next/next/no-page-custom-font': 'error',
		// next/head 내에 next/script 컴포넌트 사용 방지
		'@next/next/no-script-component-in-head': 'error',
		// _document 내에 styled-jsx 선언 방지
		'@next/next/no-styled-jsx-in-document': 'error',
		// 비동기 script 강제
		'@next/next/no-sync-scripts': 'error',
		// 페이지별 title은 next/head를 사용하도록 강제
		'@next/next/no-title-in-document-head': 'error',
		// 오타 방지
		'@next/next/no-typos': 'error',
		// 불필요한 Polyfill.io 스크립트 방지
		'@next/next/no-unwanted-polyfillio': 'error'

	}
} satisfies Linter.Config;