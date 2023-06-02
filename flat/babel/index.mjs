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
      // 自动为对象字面量、解构和导入的花括号内侧添加空格
      'object-curly-spacing': 'off',
      '@babel/object-curly-spacing': jsConfig[1].rules['object-curly-spacing'],
      // 自动在语句结尾添加分号
      semi: 'off',
      '@babel/semi': jsConfig[1].rules['semi'],
    },
  },
]
