import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import { PATTERN_ALL } from '../pattern.mjs';

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
  },
];
