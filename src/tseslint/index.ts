/**
 * ESLint typescript 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.01.24 Fri 16:57:22
 */

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
		'@typescript-eslint/no-misused-promises': 'error',
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
		'@typescript-eslint/use-unknown-in-catch-callback-variable': 'error'
	}
};

export default config;