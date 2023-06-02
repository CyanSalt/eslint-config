import babelParser from '@babel/eslint-parser'
import babelPlugin from '@babel/eslint-plugin'
import jsConfig from '../index.mjs'

export default [
  {
    languageOptions: {
      parser: babelParser,
    },
    plugins: {
      '@babel': babelPlugin,
    },
    rules: {
      // 禁止使用某些表达式代替对应语句
      'no-unused-expressions': 'off',
      '@babel/no-unused-expressions': jsConfig[1].rules['no-unused-expressions'],
    },
  },
]
