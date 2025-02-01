/**
 * ESLint react 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.02.01 Sat 17:29:01
 */

import pluginReact from 'eslint-plugin-react';

import type { Linter } from 'eslint';

export default {
	plugins: { '@react': pluginReact },
	rules: {
		// boolean은 반드시 isBoolean 형태로 표기됨
		'@react/boolean-prop-naming': 'error',
		// 버튼은 반드시 명시적인 타입을 가지도록 강제
		'@react/button-has-type': 'error',
		// 컴포넌트는 항상 DisplayName를 가짐
		'@react/display-name': 'error',
		// 기명 컴포넌트는 함수형으로, 익명 컴포넌트는 애로우 메서드로 강제
		'@react/function-component-definition': [
			'error',
			{
				namedComponents: 'function-declaration',
				unnamedComponents: 'arrow-function'
			}
		],
		// useState의 get, set 객체명은 대칭적으로 구성됨
		'@react/hook-use-state': 'error',
		// boolean 프로퍼티는 암시적 표현 강제
		'@react/jsx-boolean-value': [
			'error',
			'never'
		],
		// JSX는 반드시 .jsx 혹은 .tsx 확장자를 가짐
		'@react/jsx-filename-extension': [
			'error',
			{
				extensions: [
					'.jsx',
					'.tsx'
				]
			}
		],
		// 핸들러 메서드 및 프로퍼티 명칭 규약 강제
		'@react/jsx-handler-names': 'error',
		// JSX 반복문 시, key 프로퍼티를 반드시 포함하도록 강제
		'@react/jsx-key': 'error',
		// 주석이 텍스트 노드에서 사용되는 것을 방지함
		'@react/jsx-no-comment-textnodes': 'error',
		// 불필요한 재렌더링을 유발하는 값 할당 방지
		'@react/jsx-no-constructed-context-values': 'error',
		// 중복 프로퍼티 방지
		'@react/jsx-no-duplicate-props': 'error',
		// a태그 취약점 방지
		'@react/jsx-no-target-blank': 'error',
		// 정의되지 않은 컴포넌트 호출 방지
		'@react/jsx-no-undef': 'error',
		// 불필요한 프래그먼트 방지
		'@react/jsx-no-useless-fragment': 'error',
		// 중복 스프레드 프로퍼티 할당 방지
		'@react/jsx-props-no-spread-multi': 'error',
		// 미사용 JSX 방지
		'@react/jsx-uses-vars': 'error',
		// 이전 상태 기반 변경 시, 메서드의 인자로 참조하도록 강제
		'@react/no-access-state-in-setstate': 'error',
		// children을 프로퍼티로 전달하는 것을 방지
		'@react/no-children-prop': 'error',
		// dangerouslySetInnerHTML 프로퍼티와 children 병행 금지
		'@react/no-danger-with-children': 'error',
		// deprecated 문법 사용 방지
		'@react/no-deprecated': 'error',
		// state 직접 변경 방지
		'@react/no-direct-mutation-state': 'error',
		// findDOMNode 메서드 사용 방지
		'@react/no-find-dom-node': 'error',
		// 유효하지 않은 HTML 속성 사용 방지
		'@react/no-invalid-html-attribute': 'error',
		// isMount 메서드 사용 방지
		'@react/no-is-mounted': 'error',
		// 컴포넌트의 반환값을 변수로 사용하지 않도록 방지
		'@react/no-render-return-value': 'error',
		// 함수형 컴포넌트에서 this 호출 방지
		'@react/no-this-in-sfc': 'error',
		// 오타 방지
		'@react/no-typos': 'error',
		// 문자열 이스케이핑 강제
		'@react/no-unescaped-entitie': 'error',
		// 알려지지 않은 프로퍼티 사용 방지
		'@react/no-unknown-property': 'error',
		// 미사용 프로퍼티 선언 방지
		'@react/no-unused-prop-types': 'error',
		// 미사용 상태 선언 방지
		'@react/no-unused-state': 'error',
		// 프로퍼티 수정 방지
		'@react/prefer-read-only-props': 'error',
		// 함수형 컴포넌트 강제
		'@react/prefer-stateless-function': 'error',
		// 프로퍼티 타입 선언 강제
		'@react/prop-types': 'error',
		// children을 가질 수 없는 DOM에 children 할당 방지
		'@react/void-dom-elements-no-children': 'error'
	}
} satisfies Linter.Config;