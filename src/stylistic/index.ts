/**
 * ESLint stylistic 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.01.24 Fri 16:56:55
 */

import stylistic from '@stylistic/eslint-plugin';

import type { Linter } from 'eslint';

export default {
	plugins: { '@stylistic': stylistic },
	rules: {
		// 배열 아이템이 3개 이상이라면, 브라켓에 줄바꿈 추가
		'@stylistic/array-bracket-newline': [
			'error',
			{
				minItems: 2,
				multiline: false
			}
		],
		// 배열 브라켓에 공백 강제
		'@stylistic/array-bracket-spacing': [
			'error',
			'always'
		],
		// 배열 아이템이 3개 이상이라면, 각 요소에 줄바꿈 추가
		'@stylistic/array-element-newline': [
			'error',
			{
				minItems: 2,
				multiline: false
			}
		],
		// 애로우 메서드의 파라미터는 어떠한 경우에도 소괄호로 감쌈
		'@stylistic/arrow-parens': [
			'error',
			'always'
		],
		// 애로우 메서드의 화살표 양 옆에 공백 강제
		'@stylistic/arrow-spacing': 'error',
		// { 인라인 블록 브라켓 }에 공백 강제
		'@stylistic/block-spacing': 'error',
		// allman 스타일 강제
		'@stylistic/brace-style': [
			'error',
			'allman'
		],
		// 불필요한 컴마 댕글링 방지
		'@stylistic/comma-dangle': 'error',
		// 컴마는 반드시, 이렇게
		'@stylistic/comma-spacing': 'error',
		// 프로퍼티 브라켓에 스페이싱 제거
		'@stylistic/computed-property-spacing': 'error',
		// 블록 브라켓에 항상 줄바꿈 강제
		'@stylistic/curly-newline': [
			'error',
			'always'
		],
		// 체이닝 시 .은 항상 프로퍼티에 추가됨
		'@stylistic/dot-location': [
			'error',
			'property'
		],
		// EOL 제거
		'@stylistic/eol-last': [
			'error',
			'never'
		],
		// 대체 누가 메서드를 fn ()로 호출함?
		'@stylistic/function-call-spacing': 'error',
		// 파라미터 한 줄 강제
		'@stylistic/function-paren-newline': [
			'error',
			'never'
		],
		// *메서드 공백 제거
		'@stylistic/generator-star-spacing': 'error',
		// 애로우 메서드의 인라인 반환값 한 줄 강제
		'@stylistic/implicit-arrow-linebreak': 'error',
		// 인덴트 탭 강제
		'@stylistic/indent': [
			'error',
			'tab'
		],
		// 바이너리 연산자 인덴트 지정
		'@stylistic/indent-binary-ops': [
			'error',
			'tab'
		],
		// JSX 클로징 브라켓 위치가 태그 위치에 의존하도록 강제
		'@stylistic/jsx-closing-bracket-location': 'error',
		// JSX 클로징 태그 위치가 태그 위치에 의존하도록 강제
		'@stylistic/jsx-closing-tag-location': 'error',
		// JSX 할당 규칙 강제
		'@stylistic/jsx-curly-brace-presence': [
			'error',
			{
				children: 'never',
				props: 'never'
			}
		],
		// JSX 템플릿 줄바꿈 규칙 강제
		'@stylistic/jsx-curly-newline': [
			'error',
			{
				multiline: 'consistent',
				singleline: 'consistent'
			}
		],
		// JSX 템플릿 공백 항상 제거
		'@stylistic/jsx-curly-spacing': [
			'error',
			{
				children: true,
				when: 'never'
			}
		],
		// JSX 프로퍼티 할당 기호 공백 제거
		'@stylistic/jsx-equals-spacing': 'error',
		// JSX 첫 프로퍼티 줄바꿈 규칙 강제
		'@stylistic/jsx-first-prop-new-line': 'error',
		// JSX 메서드 호출 규칙 강제
		'@stylistic/jsx-function-call-newline': 'error',
		// JSX 프로퍼티 줄바꿈 규칙 강제
		'@stylistic/jsx-max-props-per-line': [
			'error',
			{ when: 'multiline' }
		],
		// JSX 프로퍼티 다중 공백 제거
		'@stylistic/jsx-props-no-multi-spaces': 'error',
		// JSX 프로퍼티 따옴표 더블 강제
		'@stylistic/jsx-quotes': 'error',
		// JSX 셀프 클로징 강제
		'@stylistic/jsx-self-closing-comp': [
			'error',
			{
				component: true,
				html: true
			}
		],
		// JSX 프로퍼티 키 정렬 강제
		'@stylistic/jsx-sort-props': [
			'error',
			{
				callbacksLast: true,
				shorthandLast: true
			}
		],
		// JSX 셀프 클로징 시 클로징 태그 전위 공백 강제
		'@stylistic/jsx-tag-spacing': [
			'error',
			{ beforeSelfClosing: 'always' }
		],
		// JSX 래핑 규칙 강제
		'@stylistic/jsx-wrap-multilines': [
			'error',
			{
				arrow: 'parens-new-line',
				assignment: 'parens-new-line',
				condition: 'parens-new-line',
				declaration: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line',
				propertyValue: 'parens-new-line',
				return: 'parens-new-line'
			}
		],
		// 키 콜론 공백은 항상 후위에만 붙도록 강제
		'@stylistic/key-spacing': 'error',
		// 키워드의 공백 강제
		'@stylistic/keyword-spacing': 'error',
		// 멤버 구분자 강제
		'@stylistic/member-delimiter-style': 'error',
		// 주석 구분 라인 기준으로 강제
		'@stylistic/multiline-comment-style': [
			'error',
			'separate-lines'
		],
		// new 클래스엔 반드시 파라미터 괄호 동반 강제
		'@stylistic/new-parens': 'error',
		// 두번째 체이닝부터 줄로 구분하도록 강제
		'@stylistic/newline-per-chained-call': [
			'error',
			{ ignoreChainWithDepth: 1 }
		],
		// 애로우 메서드 반환값 혼동 방지
		'@stylistic/no-confusing-arrow': 'error',
		// 불필요한 세미콜론 방지
		'@stylistic/no-extra-semi': 'error',
		// 플로팅 숫자 방지
		'@stylistic/no-floating-decimal': 'error',
		// 탭과 공백 혼용 방지
		'@stylistic/no-mixed-spaces-and-tabs': 'error',
		// 다중 공백 방지
		'@stylistic/no-multi-spaces': 'error',
		// 다중 줄바꿈 방지
		'@stylistic/no-multiple-empty-lines': 'error',
		// 트릴링 공백 방지
		'@stylistic/no-trailing-spaces': 'error',
		// 프로퍼티 콤마에 전위 공백 방지
		'@stylistic/no-whitespace-before-property': 'error',
		// 오브젝트 브라켓 줄바꿈 규칙 강제
		'@stylistic/object-curly-newline': [
			'error',
			{
				minProperties: 2,
				multiline: true
			}
		],
		// 오브젝트 브라켓 공백 강제
		'@stylistic/object-curly-spacing': [
			'error',
			'always'
		],
		// 오브젝트 요소 줄바꿈 규칙 강제
		'@stylistic/object-property-newline': [
			'error',
			{ allowAllPropertiesOnSameLine: false }
		],
		// 불필요한 블럭 패딩 방지
		'@stylistic/padded-blocks': [
			'error',
			'never'
		],
		// 키워드별 패딩 규칙 지정
		'@stylistic/padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				next: 'return',
				prev: '*'
			},
			{
				blankLine: 'always',
				next: '*',
				prev: [
					'const',
					'let',
					'var'
				]
			},
			{
				blankLine: 'any',
				next: [
					'const',
					'let',
					'var'
				],
				prev: [
					'const',
					'let',
					'var'
				]
			},
			{
				blankLine: 'always',
				next: '*',
				prev: 'directive'
			},
			{
				blankLine: 'any',
				next: 'directive',
				prev: 'directive'
			},
			{
				blankLine: 'always',
				next: '*',
				prev: [
					'case',
					'default'
				]
			},
			{
				blankLine: 'always',
				next: [
					'enum',
					'interface',
					'type'
				],
				prev: '*'
			}
		],
		// 프로퍼티 따옴표는 필요한 경우에만 지정
		'@stylistic/quote-props': [
			'error',
			'as-needed'
		],
		// 문자열은 싱글 따옴표 강제
		'@stylistic/quotes': [
			'error',
			'single'
		],
		// 가변 스프레드에 공백 제거
		'@stylistic/rest-spread-spacing': 'error',
		// 세미콜론 강제
		'@stylistic/semi': 'error',
		// 세미콜론 전위 공백 방지
		'@stylistic/semi-spacing': 'error',
		// 세미콜론은 반드시 구문 끝에 위치
		'@stylistic/semi-style': 'error',
		// 블록 전위 공백 강제
		'@stylistic/space-before-blocks': 'error',
		// 메서드 파라미터 괄호 공백 방지
		'@stylistic/space-before-function-paren': [
			'error',
			'never'
		],
		// 연산자 공백 강제
		'@stylistic/space-infix-ops': 'error',
		// 단항연산자 공백 제거
		'@stylistic/space-unary-ops': 'error',
		// 주석 공백 처리
		'@stylistic/spaced-comment': 'error',
		// case 콜론 공백 처리
		'@stylistic/switch-colon-spacing': 'error',
		// 템플릿 문법 내부 공백 방지
		'@stylistic/template-curly-spacing': 'error',
		// 템플릿 태그 공백 추가
		'@stylistic/template-tag-spacing': [
			'error',
			'never'
		],
		// 타입 어노테이션 후행 공백만 허용
		'@stylistic/type-annotation-spacing': 'error',
		// <제네릭, 타입> 공백 처리
		'@stylistic/type-generic-spacing': 'error',
		// 튜플 타입 공백 처리
		'@stylistic/type-named-tuple-spacing': 'error',
		// (IIFE 호출 방식)() 강제
		'@stylistic/wrap-iife': [
			'error',
			'inside'
		]
	}
} satisfies Linter.Config;