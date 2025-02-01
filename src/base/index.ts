/**
 * ESLint 기본 설정 모듈
 *
 * @author RWB
 * @since 2025.01.24 Fri 16:55:44
 */

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