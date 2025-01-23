import babelParser from '@babel/eslint-parser'
import babelPlugin from '@babel/eslint-plugin'
import { defineConfig } from '../config.js'

export default defineConfig(options => {
  if (!options.babel || options.typescript && !options.typescript.mixed) return []
  return [
    {
      name: '@cyansalt/babel/setup',
      languageOptions: {
        parser: babelParser,
      },
      plugins: {
        '@babel': babelPlugin,
      },
      rules: {
        // 禁止使用某些表达式代替对应语句
        'no-unused-expressions': 'off',
        '@babel/no-unused-expressions': 'error',
      },
    },
    ...(options.typescript ? [] : [
      {
        name: '@cyansalt/babel/esnext',
        rules: {
          // 禁止使用未定义的变量
          'no-undef': 'off',
          '@babel/no-undef': 'error',
          // 自动为对象字面量、解构和导入的花括号内侧添加空格
          '@stylistic/js/object-curly-spacing': 'off',
          '@babel/object-curly-spacing': ['warn', 'always'],
          // 自动移除语句结尾的分号
          '@stylistic/js/semi': 'off',
          '@babel/semi': ['warn', 'never'],
        },
      },
    ]),
  ]
})
