import cspellEslintPlugin from '@cspell/eslint-plugin';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		ignores: [
			'.prettierrc',
			'.lintstagedrc.js',
			'vite.config.*',
			'webpack.config.*',
			'tsconfig.json',
			'**/.husky/',
			'postcss.config.*',
			'eslint.config.mjs',
			'**/node_modules/',
			'**/dist/',
			'**/build/',
			'**/public/',
			'package-lock.json',
			'package.json',
			'src/mock/*',
		],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
	},
	// Prettier
	{
		plugins: { prettier },
		rules: {
			'prettier/prettier': 'error',
		},
	},

	// unused-imports + cspell
	{
		plugins: {
			'unused-imports': unusedImports,
			'@cspell': cspellEslintPlugin,
		},
		rules: {
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
			'@cspell/spellchecker': 'error',

			// остальное из вашей конфигурации
			'max-len': [
				2,
				{
					code: 300,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreUrls: true,
				},
			],
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'linebreak-style': ['error', 'unix'],
			'no-debugger': 'off',
		},
	},
]);
