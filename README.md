# eslint-config-itcode

<p align="center">
	<a href="https://user-images.githubusercontent.com/50317129/253508242-27af1488-bb0d-46df-9a95-5fbf2e3e9dcc.png" target="_blank" align="center">
		<img src="https://user-images.githubusercontent.com/50317129/253508242-27af1488-bb0d-46df-9a95-5fbf2e3e9dcc.png" />
	</a>
</p>

- **itcode.dev** 전역 ESLint 설정

<br />

## 사용 디펜던시

- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
  - TypeScript용 ESLint 플러그인
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
  - TypeScript용 ESLint Parser
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
  - Airbnb 설정
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
  - Import 구문 관련 ESLint 플러그인
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
  - JSX 구문 관련 ESLint 플러그인
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
  - React 관련 ESLint 플러그인
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - React Hook 관련 ESLint 플러그인
- [eslint-plugin-sort-keys-fix](https://www.npmjs.com/package/eslint-plugin-sort-keys-fix)
  - 정렬 관련 ESLint 플러그인
- [eslint-plugin-unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports)
  - 미사용 구문 관련 ESLint 플러그인

<br />

## 사용법

``` bash
yarn add -D @itcode-dev/eslint-config
```

``` js
// .eslintrc.js
{
	extends: [ '@itcode-dev' ],
	// ...
}
```