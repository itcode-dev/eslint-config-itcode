import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions} */
const config = {
	input: './src/index.ts',
	output: [
		{
			dir: './dist',
			format: 'es',
			preserveModules: true,
			preserveModulesRoot: './src',
			sourcemap: false
		},
		{
			file: './dist/index.cjs',
			format: 'cjs',
			sourcemap: false
		}
	],
	plugins: [
		commonjs({ requireReturnsDefault: true }),
		typescript()
	]
};

export default [ config ];