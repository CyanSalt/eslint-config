import { PATTERN_ALL } from '../pattern.mjs'
import jsConfig from '../stylistic.mjs'

export default [
  {
    files: [PATTERN_ALL],
    rules: {
      // 自动优化花括号为 one true 风格（左侧花括号前不换行，else 前也不换行）
      '@stylistic/js/brace-style': 'off',
      '@stylistic/ts/brace-style': jsConfig[0].rules['@stylistic/js/brace-style'],
      // 自动添加尾随逗号
      '@stylistic/js/comma-dangle': 'off',
      '@stylistic/ts/comma-dangle': jsConfig[0].rules['@stylistic/js/comma-dangle'],
      // 自动优化逗号的空格使用（逗号前禁止使用空格，逗号后必须使用空格）
      '@stylistic/js/comma-spacing': 'off',
      '@stylistic/ts/comma-spacing': jsConfig[0].rules['@stylistic/js/comma-spacing'],
      // 自动删除函数调用的括号前的空格
      '@stylistic/js/func-call-spacing': 'off',
      '@stylistic/ts/func-call-spacing': jsConfig[0].rules['@stylistic/js/func-call-spacing'],
      // 自动优化缩进为两个空格
      '@stylistic/js/indent': 'off',
      '@stylistic/ts/indent': jsConfig[0].rules['@stylistic/js/indent'],
      // 自动优化对象字面量冒号的空格使用（冒号前禁止使用空格，冒号后必须使用空格）
      '@stylistic/js/key-spacing': 'off',
      '@stylistic/ts/key-spacing': jsConfig[0].rules['@stylistic/js/key-spacing'],
      // 自动在关键字前后添加空格
      '@stylistic/js/keyword-spacing': 'off',
      '@stylistic/ts/keyword-spacing': jsConfig[0].rules['@stylistic/js/keyword-spacing'],
      // 禁止多余的分号
      '@stylistic/js/no-extra-semi': 'off',
      '@stylistic/ts/no-extra-semi': jsConfig[0].rules['@stylistic/js/no-extra-semi'],
      // 自动为对象字面量、解构和导入的花括号内侧添加空格
      '@stylistic/js/object-curly-spacing': 'off',
      '@stylistic/ts/object-curly-spacing': jsConfig[0].rules['@stylistic/js/object-curly-spacing'],
      // 自动替换字符串字面量的双引号
      '@stylistic/js/quotes': 'off',
      '@stylistic/ts/quotes': jsConfig[0].rules['@stylistic/js/quotes'],
      // 自动移除语句结尾的分号
      '@stylistic/js/semi': 'off',
      '@stylistic/ts/semi': jsConfig[0].rules['@stylistic/js/semi'],
      // 自动在if等结构的声明块和代码块之间添加空格
      '@stylistic/js/space-before-blocks': 'off',
      '@stylistic/ts/space-before-blocks': jsConfig[0].rules['@stylistic/js/space-before-blocks'],
      // 自动删除函数名和括号之间的空格，匿名函数除外
      '@stylistic/js/space-before-function-paren': 'off',
      '@stylistic/ts/space-before-function-paren': jsConfig[0].rules['@stylistic/js/space-before-function-paren'],
      // 自动在多元操作符前后添加空格
      '@stylistic/js/space-infix-ops': 'off',
      '@stylistic/ts/space-infix-ops': jsConfig[0].rules['@stylistic/js/space-infix-ops'],
    },
  },
]
