import typescript from '@rollup/plugin-typescript';

const config = {
	input: './src/index.ts',
	output: [
		{
			file: './dist/index.js',
			format: 'es',
			sourcemap: false
		},
		{
			file: './dist/index.cjs',
			format: 'cjs',
			sourcemap: false
		}
	],
	plugins: [ typescript() ]
};

export default [ config ];