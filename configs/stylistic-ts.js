import stylisticJsPlugin from '@stylistic/eslint-plugin-js'
import stylisticPlusPlugin from '@stylistic/eslint-plugin-plus'
import stylisticTsPlugin from '@stylistic/eslint-plugin-ts'
import { defineConfig } from '../config.js'

export default defineConfig(options => {
  return [
    {
      name: '@cyansalt/stylistic/typescript',
      plugins: {
        '@stylistic/js': stylisticJsPlugin,
        '@stylistic/ts': stylisticTsPlugin,
        '@stylistic/plus': stylisticPlusPlugin,
      },
      rules: {
        // 类型定义必须用逗号分隔
        '@stylistic/ts/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        }],
        // 自动修复类型标注的空格（冒号后空格，箭头前后空格）
        '@stylistic/ts/type-annotation-spacing': 'warn',

        // 自动优化花括号为 one true 风格（左侧花括号前不换行，else 前也不换行）
        '@stylistic/js/brace-style': 'off',
        '@stylistic/ts/brace-style': 'warn',
        // 自动添加尾随逗号，除了动态导入（兼容性）
        '@stylistic/js/comma-dangle': 'off',
        '@stylistic/ts/comma-dangle': ['warn', {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
          importAttributes: 'always-multiline',
          dynamicImports: 'never',
          // TypeScript only
          enums: 'always-multiline',
          generics: 'always-multiline',
          tuples: 'always-multiline',
        }],
        // 自动优化逗号的空格使用（逗号前禁止使用空格，逗号后必须使用空格）
        '@stylistic/js/comma-spacing': 'off',
        '@stylistic/ts/comma-spacing': 'warn',
        // 自动删除函数调用的括号前的空格
        '@stylistic/js/function-call-spacing': 'off',
        '@stylistic/ts/function-call-spacing': 'warn',
        // 自动优化缩进为两个空格
        '@stylistic/js/indent': 'off',
        '@stylistic/ts/indent': ['warn', 2, {
          SwitchCase: 1,
          ignoredNodes: ['TSTypeParameterInstantiation'],
        }],
        // 自动优化对象字面量冒号的空格使用（冒号前禁止使用空格，冒号后必须使用空格）
        '@stylistic/js/key-spacing': 'off',
        '@stylistic/ts/key-spacing': ['warn', { beforeColon: false, afterColon: true, mode: 'strict' }],
        // 自动在关键字前后添加空格
        '@stylistic/js/keyword-spacing': 'off',
        '@stylistic/ts/keyword-spacing': ['warn', { before: true, after: true }],
        // 禁止多余的分号
        '@stylistic/js/no-extra-semi': 'off',
        '@stylistic/ts/no-extra-semi': 'error',
        // 自动优化对象字面量、解构和导入的花括号换行（前括号和后括号保持一致）
        '@stylistic/js/object-curly-newline': 'off',
        '@stylistic/ts/object-curly-newline': ['warn', { consistent: true }],
        // 自动为对象字面量、解构和导入的花括号内侧添加空格
        '@stylistic/js/object-curly-spacing': 'off',
        '@stylistic/ts/object-curly-spacing': ['warn', 'always'],
        // 自动优化对象属性换行（全部一行或全部换行）
        '@stylistic/js/object-property-newline': 'off',
        '@stylistic/ts/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
        // 自动删除不必要的对象字面量键的引号
        '@stylistic/js/quote-props': 'off',
        '@stylistic/ts/quote-props': ['warn', 'as-needed'],
        // 自动替换字符串字面量的双引号
        '@stylistic/js/quotes': 'off',
        '@stylistic/ts/quotes': ['warn', 'single', { allowTemplateLiterals: true }],
        // 自动移除语句结尾的分号
        '@stylistic/js/semi': 'off',
        '@stylistic/ts/semi': ['warn', 'never'],
        // 自动在if等结构的声明块和代码块之间添加空格
        '@stylistic/js/space-before-blocks': 'off',
        '@stylistic/ts/space-before-blocks': 'warn',
        // 自动删除函数名和括号之间的空格，匿名函数除外
        '@stylistic/js/space-before-function-paren': 'off',
        '@stylistic/ts/space-before-function-paren': ['warn', { named: 'never' }],
        // 自动在多元操作符前后添加空格
        '@stylistic/js/space-infix-ops': 'off',
        '@stylistic/ts/space-infix-ops': 'warn',

        // 自动优化类型参数间的空格
        '@stylistic/plus/type-generic-spacing': 'warn',
        // 自动优化命名类型元组间的空格
        '@stylistic/plus/type-named-tuple-spacing': 'warn',
      },
    },
  ]
})
