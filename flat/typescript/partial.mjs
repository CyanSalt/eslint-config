import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import { PATTERN_ALL } from '../pattern.mjs'
import baseConfig from './base.mjs'
import compatibleConfig from './compatible.mjs'
import typescriptConfig from './index.mjs'

export default [
  {
    ...baseConfig[0],
    files: ['**/*.{cts,mts,ts,tsx}'],
  },
  baseConfig[1],
  ...typescriptEslintPlugin.configs['eslint-recommended'].overrides,
  {
    files: [PATTERN_ALL],
    rules: {
      ...typescriptEslintPlugin.configs['recommended'].rules,
      ...typescriptEslintPlugin.configs['stylistic'].rules,
    },
  },
  ...compatibleConfig,
  {
    ...typescriptConfig[typescriptConfig.length - 1],
    files: ['**/*.{cts,mts,ts,tsx}'],
  },
]
