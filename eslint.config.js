import { defineConfig } from 'eslint/config'

import eslintAstroParser from 'astro-eslint-parser'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginStylistic from '@stylistic/eslint-plugin'
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'
import eslintTypescriptParser from '@typescript-eslint/parser'

export default defineConfig([
  {
    plugins: {
      '@typescript-eslint': eslintPluginTypescript.configs.recommended,
      astro: eslintPluginAstro.configs.recommended,
      stylistic: eslintPluginStylistic.configs.recommended,
      'simple-import-sort': eslintPluginImportSort,
    },
    rules: {
      semi: ['error', 'never'],
      indent: ['error', 2, { SwitchCase: 1 }],
      "sort-imports": ["error", {
        "allowSeparatedGroups": true,
        "ignoreCase": true,
      }],
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintAstroParser,
      parserOptions: {
        parser: eslintTypescriptParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: eslintTypescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
  },
])
