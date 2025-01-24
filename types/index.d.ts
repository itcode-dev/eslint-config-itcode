/**
 * 전역 타입 클래스
 *
 * @author RWB
 * @since 2025.01.24 Fri 17:01:08
 */

/// <reference types="eslint" />

interface AnonyEslintPlugin
{
	// 설정
	configs: Record<string, Linter.Config>;
}