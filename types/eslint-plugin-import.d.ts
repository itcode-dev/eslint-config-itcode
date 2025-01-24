/**
 * eslint-plugin-import 타입 모듈
 *
 * @author RWB
 * @since 2025.01.24 Fri 17:01:44
 */

/// <reference types="." />

declare module 'eslint-plugin-import'
{
	const plugin: AnonyEslintPlugin;

	export default plugin;
}