import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import { PATTERN_ALL } from '../pattern.mjs'

export default [
  {
    files: [PATTERN_ALL],
    languageOptions: {
      parser: typescriptEslintParser,
    },
  },
  {
    files: [PATTERN_ALL],
    languageOptions: {
      parserOptions: {
        project: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      'constructor-super': 'error',
      'getter-return': 'error',
      'no-const-assign': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-new-symbol': 'error',
      'no-obj-calls': 'error',
      // TS overload
      // 'no-redeclare': 'error',
      'no-setter-return': 'error',
      'no-this-before-super': 'error',
      // Global namespaces
      // 'no-undef': 'error',
      'no-unreachable': 'error',
      'no-unsafe-negation': 'error',
    },
  },
]
