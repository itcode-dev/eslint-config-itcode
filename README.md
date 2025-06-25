# @itcode-dev/eslint-config

<p align="center">
	<a href="https://user-images.githubusercontent.com/50317129/260247458-5433aa31-3f43-4725-af70-ab308dcf7464.png" target="_blank" align="center">
		<img src="https://user-images.githubusercontent.com/50317129/260247458-5433aa31-3f43-4725-af70-ab308dcf7464.png" />
	</a>
</p>

- **itcode.dev** 전역 ESLint 설정

<br />

## 사용 디펜던시

- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
  - Import 구문 관련 ESLint 플러그인
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
  - Jest 구문 관련 ESLint 플러그인
- [@next/eslint-plugin-next](https://www.npmjs.com/package/@next/eslint-plugin-next)
  - Next.js 관련 ESLint 플러그인
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
  - React 관련 ESLint 플러그인
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - React Hook 관련 ESLint 플러그인
- [eslint-plugin-sort-keys-fix](https://www.npmjs.com/package/eslint-plugin-sort-keys-fix)
  - 정렬 관련 ESLint 플러그인
- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)
  - stylistic ESLint 플러그인
- [@tanstack/eslint-plugin-query](https://www.npmjs.com/package/@tanstack/eslint-plugin-query)
  - react-query 관련 ESLint 플러그인
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)
  - TypeScript 관련 ESLint 플러그인
- [eslint-plugin-unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports)
  - 미사용 구문 관련 ESLint 플러그인

<br />

## 사용법

- npm

``` bash
# npm
npm add -D @itcode-dev/eslint-config
```

- yarn

``` bash
# yarn
yarn add -D @itcode-dev/eslint-config
```

- yarn berry

``` bash
# yarn berry
yarn add -D @itcode-dev/eslint-config eslint-plugin-import eslint-plugin-jest @next/eslint-plugin-next eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-sort-keys-fix @tanstack/eslint-plugin-query typescript-eslint eslint-plugin-unused-imports
```

- pnpm

``` bash
# pnpm
pnpm add -D @itcode-dev/eslint-config
```

## 설정 방법

| name                  | description                                                                                       |
| :-------------------- | :------------------------------------------------------------------------------------------------ |
| `baseConfig`          | ESLint 설정                                                                                       |
| `importConfig`        | [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) 설정                   |
| `jestConfig`          | [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) 설정                       |
| `nextConfig`          | [@next/eslint-plugin-next](https://www.npmjs.com/package/@next/eslint-plugin-next) 설정           |
| `reactConfig`         | [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) 설정                     |
| `reactHooksConfig`    | [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) 설정         |
| `sortKeysFixConfig`   | [eslint-plugin-sort-keys-fix](https://www.npmjs.com/package/eslint-plugin-sort-keys-fix) 설정     |
| `stylisticConfig`     | [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin) 설정           |
| `tanstackConfig`      | [@tanstack/eslint-plugin-query](https://www.npmjs.com/package/@tanstack/eslint-plugin-query) 설정 |
| `tseslintConfig`      | [typescript-eslint](https://www.npmjs.com/package/typescript-eslint) 설정                         |
| `unusedImportsConfig` | [eslint-plugin-unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports) 설정   |

``` js
import itcodeConfig from '@itcode-dev/eslint-config'

// eslint.config.js
module.expors = [
  itcode.configs.baseConfig
]
```

``` js
import baseConfig from '@itcode-dev/eslint-config/base'

// eslint.config.js
module.expors = [
  baseConfig
]
```

## 설정 세부사항

### ESLint 기본 설정

``` ts
import type { Linter } from 'eslint';

export default {
	// Override or add rules here
	rules: {
		// 가능하다면, 애로우 메서드는 중괄호를 묶지 않고 반환함
		'arrow-body-style': [
			'error',
			'as-needed'
		],
		// 구문 중괄호를 반드시 명시하도록 강제
		curly: 'error',
		// switch의 default 구문이 반드시 최하단에 위치하도록 강제
		'default-case-last': 'error',
		// 기본값이 명시된 파라미터는 가장 마지막에 위치하도록 강제
		'default-param-last': 'error',
		// === 비교 연산자를 사용하도록 강제
		eqeqeq: 'error',
		// alert(금지)
		'no-alert': 'error',
		// 반복문에서의 반복문에서의 반복문에서의 await 허용
		'no-await-in-loop': 'off',
		// console 사용 방지, 필요하다면 라인별 옵션 비활성화로 대응. 단, warn과 error는 허용
		'no-console': [
			'error',
			{
				allow: [
					'warn',
					'error'
				]
			}
		],
		// 조건문에서의 불필요한 return 사용 방지
		'no-else-return': 'error',
		// 빈 메서드 방지
		'no-empty-function': 'error',
		// null 비교에 eq 연산자 사용 방지
		'no-eq-null': 'error',
		// eval is evil
		'no-eval': 'error',
		// 불필요한 bool 캐스팅 방지
		'no-extra-boolean-cast': 'error',
		// 난해한 캐스팅 연산 방지
		'no-implicit-coercion': 'error',
		// eval 유사 메서드 사용 방지
		'no-implied-eval': 'error',
		// 코드 도중의 인라인 주석 방지
		'no-inline-comments': 'error',
		// __iterator__ 프로퍼티 사용 방지
		'no-iterator': 'error',
		// 무의미한 블록문 방지
		'no-lone-blocks': 'error',
		// 불필요한 조건문 중첩 방지
		'no-lonely-if': 'error',
		// 할당이나 비교가 아닌 단독 new 연산자 방지
		'no-new': 'error',
		// Function을 활용한 메서드 생성 방지
		'no-new-func': 'error',
		// 불필요한 래핑에 new 연산자 방지
		'no-new-wrappers': 'error',
		// 불필요한 Object 생성자 방지
		'no-object-constructor': 'error',
		// 8진수 이스케이프 방지
		'no-octal-escape': 'error',
		// 파라미터 재할당 방지
		'no-param-reassign': 'error',
		// __proto__ 프로퍼티 사용 방지
		'no-proto': 'error',
		// javascript:console.log(사용금지)
		'no-script-url': 'error',
		// 상위 스코프에서 사용된 변수명을 하위 스코프에서 사용 방지
		'no-shadow': 'error',
		// 리터럴 예외처리 방지
		'no-throw-literal': 'error',
		// 할당되지 않은 초기 변수에 undefined 할당 방지
		'no-undef-init': 'error',
		// 사용하지 않는 표현 방지
		'no-unused-expressions': 'error',
		// 사용하지 않는 변수명 방지
		'no-unused-vars': 'error',
		// 불필요한 메서드 call, bind 사용 방지
		'no-useless-call': 'error',
		// "불필요한" + "문자열" + "이어쓰기" + "방지"
		'no-useless-concat': 'error',
		// 불필요한 return 방지
		'no-useless-return': 'error',
		// 'var' is banned by Developer
		'no-var': 'error',
		// 'void' you too
		'no-void': 'error',
		// 간결한 형식 표현 강제
		'object-shorthand': 'error',
		// 축연강 (축약형 연산자 강제라는 뜻)
		'operator-assignment': 'error',
		// (애로우 메서드) => 사용 권장
		'prefer-arrow-callback': 'error',
		// const 사용 권장
		'prefer-const': 'error',
		// { 구조, 파괴 } = 형식 강제
		'prefer-destructuring': 'error',
		// 지수 함수 대신 ** 연산자 강제
		'prefer-exponentiation-operator': 'error',
		// `${string} 템플릿 강제`
		'prefer-template': 'error',
		// await 지시자를 사용하지 않는 메서드의 async화 방지
		'require-await': 'error',
		// 키 정렬 강제
		'sort-keys': 'error',
		// 방지함, 요다 표현을
		yoda: 'error'
	}
} satisfies Linter.Config;
```

### eslint-plugin-import 설정

``` ts
import pluginImport from 'eslint-plugin-import';

import type { Linter } from 'eslint';

export default {
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
} satisfies Linter.Config;
```

### eslint-plugin-jest 설정

``` ts
import pluginJest from 'eslint-plugin-jest';

import type { Linter } from 'eslint';

export default {
	files: [
		'**/*.spec.[jt]s?(x)',
		'**/*.test.[jt]s?(x)'
	],
	languageOptions: { globals: pluginJest.environments.globals.globals },
	plugins: { '@jest': pluginJest },
	rules: {
		// 지시어는 it으로 강제함
		'@jest/consistent-test-it': [
			'error',
			{ fn: 'it' }
		],
		// 테스트 구문에서 어썰션 누락 방지
		'@jest/expect-expect': 'error',
		// 별칭 메서드가 아닌 공식 메서드 사용 강제
		'@jest/no-alias-methods': 'error',
		// 테스트 구문 주석 처리 방지
		'@jest/no-commented-out-tests': 'error',
		// 조건부 호출 방지
		'@jest/no-conditional-expect': 'error',
		// 혼란스런 setTimeout 사용 방지
		'@jest/no-confusing-set-timeout': 'error',
		// deprecated 메서드 사용 방지
		'@jest/no-deprecated-functions': 'error',
		// 비활성화된 테스트 사용 방지
		'@jest/no-disabled-tests': 'error',
		// 비동기 테스트에서 콜백 사용 방지
		'@jest/no-done-callback': 'error',
		// 중복된 테스트 훅 방지
		'@jest/no-duplicate-hooks': 'error',
		// export 방지를 통해 이 그지같은 컴포넌트의 테스트 유출 방지
		'@jest/no-export': 'error',
		// 테스트에 only 지시자 사용 방지
		'@jest/no-focused-tests': 'error',
		// 동명이테스트 방지
		'@jest/no-identical-title': 'error',
		// 스냅샷에선 리터럴 변수 사용 방지
		'@jest/no-interpolation-in-snapshots': 'error',
		// jasmine 전역 변수 선언 방지
		'@jest/no-jasmine-globals': 'error',
		// mock 직접 import 방지
		'@jest/no-mocks-import': 'error',
		// 단독 expect 방지
		'@jest/no-standalone-expect': 'error',
		// 불필요한 테스트 prefix 방지
		'@jest/no-test-prefixes': 'error',
		// 테스트는 아무것도 반환하지 않음
		'@jest/no-test-return-statement': 'error',
		// mock은 반드시 타입을 지정해야함 (JS에선 비활성화 필요)
		'@jest/no-untyped-mock-factory': 'error',
		// 각 블록 주위로 결계 형성
		'@jest/padding-around-all': 'error',
		// mock.calls 대신 toHaveBeenCalledWith() 사용
		'@jest/prefer-called-with': 'error',
		// 내장된 비교 매처 사용
		'@jest/prefer-comparison-matcher': 'error',
		// for문을 직접 구성하는 것보다 .each 사용
		'@jest/prefer-each': 'error',
		// 내장 동등 비교 매처 사용
		'@jest/prefer-equality-matcher': 'error',
		// Promise를 통한 비동기 비교는 resolves 사용
		'@jest/prefer-expect-resolves': 'error',
		// 훅 정렬
		'@jest/prefer-hooks-in-order': 'error',
		// jest.mocked 사용하여 mocking 강제
		'@jest/prefer-jest-mocked': 'error',
		// 간결한 Promise mock 선언 강제
		'@jest/prefer-mock-promise-shorthand': 'error',
		// snapshot 힌트 강제
		'@jest/prefer-snapshot-hint': 'error',
		// 엄격한 비교인 toStrictEqual 사용
		'@jest/prefer-strict-equal': 'error',
		// 원시값 비교 시 toBe 기반 메서드 사용
		'@jest/prefer-to-be': 'error',
		// 포함 여부 비교 시 toContain 메서드 사용
		'@jest/prefer-to-contain': 'error',
		// 길이 비교 시 toHaveLength 메서드 사용
		'@jest/prefer-to-have-length': 'error',
		// 빈 테스트 케이스인 todo 사용
		'@jest/prefer-todo': 'error',
		// throws 시 유의미한 메시지 지정 강제
		'@jest/require-to-throw-message': 'error',
		// 유효한 describe 콜백 메서드 사용
		'@jest/valid-describe-callback': 'error',
		// expect가 올바르게 처리되도록 강제
		'@jest/valid-expect': 'error',
		// Promise가 올바르게 처리되도록 강제
		'@jest/valid-expect-in-promise': 'error',
		// 테스트가 올바른 타이틀을 갖도록 강제
		'@jest/valid-title': 'error'
	}
} satisfies Linter.Config;
```

### eslint-plugin-next 설정

``` ts
import pluginNext from '@next/eslint-plugin-next';

import type { Linter } from 'eslint';

export default {
	plugins: { '@next': pluginNext },
	rules: {
		// font-display 설정을 통한 폰트 로드 제어 방식 강제
		'@next/google-font-display': 'error',
		// Google Fonts pre-load 강제
		'@next/google-font-preconnect': 'error',
		// 인라인 script id 강제
		'@next/inline-script-id': 'error',
		// GA 적용 시 next/script 사용 강제
		'@next/next-script-for-ga': 'error',
		// 모듈 변수 할당 방지
		'@next/no-assign-module-variable': 'error',
		// 비동기 CSR 컴포넌트 방지
		'@next/no-async-client-component': 'error',
		// beforeInteractive 스크립트는 head 안에 위치하도록 강제
		'@next/no-before-interactive-script-outside-document': 'error',
		// style 태그 방지
		'@next/no-css-tags': 'error',
		// document 컴포넌트 import 방지
		'@next/no-document-import-in-page': 'error',
		// 헤드 중복 방지
		'@next/no-duplicate-head': 'error',
		// head 대신 next/head 사용 강제
		'@next/no-head-element': 'error',
		// _document에서 next/head 사용 방지
		'@next/no-head-import-in-document': 'error',
		// next/link 사용 강제
		'@next/no-html-link-for-pages': 'error',
		// next/image 사용 강제
		'@next/no-img-element': 'error',
		// 페이지 내 폰트 설정 방지
		'@next/no-page-custom-font': 'error',
		// next/head 내에 next/script 컴포넌트 사용 방지
		'@next/no-script-component-in-head': 'error',
		// _document 내에 styled-jsx 선언 방지
		'@next/no-styled-jsx-in-document': 'error',
		// 비동기 script 강제
		'@next/no-sync-scripts': 'error',
		// 페이지별 title은 next/head를 사용하도록 강제
		'@next/no-title-in-document-head': 'error',
		// 오타 방지
		'@next/no-typos': 'error',
		// 불필요한 Polyfill.io 스크립트 방지
		'@next/no-unwanted-polyfillio': 'error'
	}
} satisfies Linter.Config;
```

### eslint-plugin-react 설정

``` ts
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
		'@react/no-unescaped-entities': 'error',
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
```

### eslint-plugin-react-hooks 설정

``` ts
import pluginReactHooks from 'eslint-plugin-react-hooks';

import type { Linter } from 'eslint';

export default {
	files: [
		'**/*.jsx',
		'**/*.tsx'
	],
	plugins: { '@react-hooks': pluginReactHooks },
	rules: {
		// 철저한 디펜던시 배열 권고
		'@react-hooks/exhaustive-deps': 'error',
		// react hook 규칙에 위배되는 코드 방지
		'@react-hooks/rules-of-hooks': 'error',
		// 불안정한 디펜던시 배열 선언 방지
		'@tanstack/query/no-unstable-deps': 'warn',
		// 안정적인 QueryClient 선언 강제
		'@tanstack/query/stable-query-client': 'error'
	}
} satisfies Linter.Config;
```

### eslint-plugin-sort-keys-fix 설정

``` ts
import pluginSortKeysFix from 'eslint-plugin-sort-keys-fix';

import type { Linter } from 'eslint';

export default {
	plugins: { '@sort-keys-fix': pluginSortKeysFix },
	rules: { '@sort-keys-fix/sort-keys-fix': 'error' }
} satisfies Linter.Config;
```

### @stylistic/eslint-plugin 설정

``` ts
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
			{
				allowAllPropertiesOnSameLine: false,
				allowMultiplePropertiesPerLine: false
			}
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
```

### @tanstack/eslint-plugin-query 설정

``` ts
import pluginQuery from '@tanstack/eslint-plugin-query';

import type { Linter } from 'eslint';

export default {
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
} satisfies Linter.Config;
```

### typescript-eslint 설정

``` ts
import tseslint from 'typescript-eslint';

import type { ConfigArray } from 'typescript-eslint';

const config: ConfigArray[number] = {
	files: [
		'**/*.ts',
		'**/*.tsx',
		'**/*.cts',
		'**/*.mts'
	],
	plugins: { '@typescript-eslint': tseslint.plugin },
	rules: {
		// 오버로딩된 메서드는 나란히 배치하도록 강제
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		// 제네릭 타입을 구성할 때 선언할당부에 명시하도록 강제
		'@typescript-eslint/consistent-generic-constructors': 'error',
		// 타입 선언 시 가능한 경우, interface를 활용하도록 강제
		'@typescript-eslint/consistent-type-definitions': 'error',
		// type export 명시 강제
		'@typescript-eslint/consistent-type-exports': 'error',
		// export 키워드 뒤에 type 명시 강제
		'@typescript-eslint/consistent-type-imports': 'error',
		// return 타입 명시 강제
		'@typescript-eslint/explicit-function-return-type': 'error',
		// 접근자 명시 강제
		'@typescript-eslint/explicit-member-accessibility': 'error',
		// 메서드의 파라미터 및 return 타입 명시 강제
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		// 멤버 정렬 강제
		'@typescript-eslint/member-ordering': 'error',
		// 타입의 메서드는 프로퍼티 형태로 표기
		'@typescript-eslint/method-signature-style': 'error',
		// 배열에 delete 명령어 금지
		'@typescript-eslint/no-array-delete': 'error',
		// toString을 활용한 문자열 변환 방지
		'@typescript-eslint/no-base-to-string': 'error',
		// null 병합 연산자 사용 방지
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		// 혼동되는 void 표현 방지
		'@typescript-eslint/no-confusing-void-expression': 'error',
		// @deprecated 메서드 사용 금지
		'@typescript-eslint/no-deprecated': 'error',
		// 중복된 enum 값 방지
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		// 중복된 타입 할당 방지
		'@typescript-eslint/no-duplicate-type-constituents': 'error',
		// any 타입 사용 방지
		'@typescript-eslint/no-explicit-any': 'error',
		// non null 연산자 사용 방지
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		// Promise 객체의 결과를 명시적으로 다루도록 구성
		'@typescript-eslint/no-floating-promises': 'error',
		// for in 문법 방지
		'@typescript-eslint/no-for-in-array': 'error',
		// 사이드 이펙트를 유발하는 import 방지
		'@typescript-eslint/no-import-type-side-effects': 'error',
		// 유효하지 않은 void 타입 사용 방지
		'@typescript-eslint/no-invalid-void-type': 'error',
		// 의미없는 void 연산자 사용 방지
		'@typescript-eslint/no-meaningless-void-operator': 'error',
		// 오용된 new 메서드 사용 방지
		'@typescript-eslint/no-misused-new': 'error',
		// 오용된 promise 사용 방지
		'@typescript-eslint/no-misused-promises': [
			'error',
			{ checksVoidReturn: false }
		],
		// 오용된 스프레드 사용 방지
		'@typescript-eslint/no-misused-spread': 'error',
		// !와 ?? 연산자 동시 사용 방지
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		// 불필요한 타입 중복 선언 방지
		'@typescript-eslint/no-redundant-type-constituents': 'error',
		// 불필요한 boolean 비교 방지
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		// 불필요한 조건 방지
		'@typescript-eslint/no-unnecessary-condition': 'error',
		// 클래스 생성자에서의 불필요한 파라미터 선언 방지
		'@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
		// 불필요한 제네릭 타입 생략
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		// 제네릭 타입 매개변수에 불필요한 extends 방지
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		// 불안전한 선언 병합 방지
		'@typescript-eslint/no-unsafe-declaration-merging': 'error',
		// 불안전한 enum 비교 방지
		'@typescript-eslint/no-unsafe-enum-comparison': 'error',
		// 불안전한 함수 타입 방지
		'@typescript-eslint/no-unsafe-function-type': 'error',
		// 불안전한 반환 방지
		'@typescript-eslint/no-unsafe-return': 'error',
		// 불안전한 타입 확인 방지
		'@typescript-eslint/no-unsafe-type-assertion': 'error',
		// 불필요한 - 연산자 방지
		'@typescript-eslint/no-unsafe-unary-minus': 'error',
		// 미사용 변수 방지
		'@typescript-eslint/no-unused-vars': 'error',
		// 무의미한 빈 export 방지
		'@typescript-eslint/no-useless-empty-export': 'error',
		// 래퍼 객체 타입 사용 방지
		'@typescript-eslint/no-wrapper-object-types': 'error',
		// filter에서 하나의 값만 접근할 경우, find를 활용하도록 강제
		'@typescript-eslint/prefer-find': 'error',
		// 요소의 포함 여부는 includes를 활용하도록 강제
		'@typescript-eslint/prefer-includes': 'error',
		// enum 값을 명시적으로 지정하도록 강제
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		// module 선언 대신 namespace 키워드를 활용하도록 강제
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		// || 대신 ?? 연산자 사용 강제
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		// && 대신 ?. 방식으로 값에 접근하도록 강제
		'@typescript-eslint/prefer-optional-chain': 'error',
		// reduce 메서드가 구체적인 타입을 가지도록 강제
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		// 가능한 경우, startsWith, endsWith를 활용하도록 강제
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		// Promise를 반환하는 메서드는 반드시 async 키워드 강제
		'@typescript-eslint/promise-function-async': 'error',
		// 숫자 배열에서 정렬 시, 비교 메서드를 넣도록 강제
		'@typescript-eslint/require-array-sort-compare': 'error',
		// 이형의 타입에 + 연산 방지
		'@typescript-eslint/restrict-plus-operands': 'error',
		// 템플릿 문자열에서 안전한 타입만 활용되도록 강제
		'@typescript-eslint/restrict-template-expressions': 'error',
		// 반환문에서 불필요한 await 방지
		'@typescript-eslint/return-await': 'error',
		// boolean 비교 시, 명시적 비교만을 허용함
		'@typescript-eslint/strict-boolean-expressions': 'error',
		// 메서드를 변수에 할당할 때, this가 올바르게 바인딩되도록 강제
		'@typescript-eslint/unbound-method': 'error',
		// catch에서 에러는 unknown 타입을 활용하도록 강제
		'@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
		// TS는 @typescript-eslint/no-unused-vars 규칙으로 처리
		'no-unused-vars': 'off'
	}
};

export default config;
```

### eslint-plugin-unused-imports 설정

``` ts
import pluginUnusedImports from 'eslint-plugin-unused-imports';

import type { Linter } from 'eslint';

export default {
	plugins: { '@unused-imports': pluginUnusedImports },
	rules: { '@unused-imports/no-unused-imports': 'error' }
} satisfies Linter.Config;
```