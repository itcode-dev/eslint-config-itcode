# eslint-config-itcode

<p align="center">
	<a href="https://user-images.githubusercontent.com/50317129/260247458-5433aa31-3f43-4725-af70-ab308dcf7464.png" target="_blank" align="center">
		<img src="https://user-images.githubusercontent.com/50317129/260247458-5433aa31-3f43-4725-af70-ab308dcf7464.png" />
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
yarn add -D @itcode-dev/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-sort-keys-fix eslint-plugin-unused-imports
```

- pnpm

``` bash
# pnpm
pnpm add -D @itcode-dev/eslint-config
```

## 설정 방법

``` js
// .eslintrc.js
module.exports = {
	extends: [ '@itcode-dev' ],
	// ...
}
```

``` js
// .eslintrc.json
{
	"extends": [ "@itcode-dev" ],
	// ...
}
```
