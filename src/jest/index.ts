/**
 * ESLint Jest 플러그인 설정 모듈
 *
 * @author RWB
 * @since 2025.02.12 Wed 17:02:32
 */

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