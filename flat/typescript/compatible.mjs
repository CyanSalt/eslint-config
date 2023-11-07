import jsConfig from '../index.mjs'
import { PATTERN_ALL } from '../pattern.mjs'
import stylisticConfig from './stylistic.mjs';

export default [
  ...stylisticConfig,
  {
    files: [PATTERN_ALL],
    rules: {
      // [覆盖 recommended] 允许使用空对象/函数类型
      '@typescript-eslint/ban-types': 'off',
      // [覆盖 stylistic][需要 @typescript-eslint/parser]
      '@typescript-eslint/consistent-type-assertions': 'off',
      // 自动将类型引用放置在 import type 语句中
      '@typescript-eslint/consistent-type-imports': ['warn', {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
      }],
      // 自动省略 public 成员修饰符
      '@typescript-eslint/explicit-member-accessibility': ['warn', {
        accessibility: 'no-public',
      }],
      // 类型定义必须用逗号分隔
      '@typescript-eslint/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      }],
      // [覆盖 stylistic] 允许使用空函数
      '@typescript-eslint/no-empty-function': 'off',
      // [覆盖 recommended] 允许使用 any 类型
      '@typescript-eslint/no-explicit-any': 'off',
      // 禁止在非空断言后使用空值合并运算符
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      // [覆盖 recommended] 允许 this 别名
      '@typescript-eslint/no-this-alias': 'off',
      // 自动去除多余的空 export
      '@typescript-eslint/no-useless-empty-export': 'warn',
      // [覆盖 recommended] 允许 require 引入
      '@typescript-eslint/no-var-requires': 'off',
      // 禁止使用构造函数参数属性
      '@typescript-eslint/parameter-properties': 'error',
      // 使用 enum 必须指定初始值
      '@typescript-eslint/prefer-enum-initializers': 'error',
      // [覆盖 stylistic] 允许使用普通的 for 循环遍历
      '@typescript-eslint/prefer-for-of': 'off',
      // [覆盖 stylistic] 允许使用接口形式的函数类型
      '@typescript-eslint/prefer-function-type': 'off',
      // 自动修复类型标注的空格（冒号后空格，箭头前后空格）
      '@typescript-eslint/type-annotation-spacing': 'warn',

      /** Extension Rules */
      // 默认参数必须放在最后
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': jsConfig[jsConfig.length - 1].rules['default-param-last'],
      // [扩展 recommended] 禁止使用 Array 构造函数创建非空数组（歧义）
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': jsConfig[jsConfig.length - 1].rules['no-array-constructor'],
      // 禁止类成员重复
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'error',
      // 禁止覆盖声明外部作用域的变量（歧义）
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error', { hoist: 'functions' }],
      // [扩展 recommended] 禁止定义未使用的变量，除了剩余参数和解构
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': jsConfig[jsConfig.length - 1].rules['no-unused-vars'],
      // 禁止定义前使用变量（ReferenceError）
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': jsConfig[jsConfig.length - 1].rules['no-use-before-define'],
      // [继承 eslint-recommended] 允许使用 let
      'prefer-const': 'off',
      // [继承 eslint-recommended] 允许使用 arguments
      'prefer-rest-params': 'off',
      // [继承 eslint-recommended] 允许使用 apply
      'prefer-spread': 'off',
      // 自动在多元操作符前后添加空格
      'space-infix-ops': 'off',
      '@typescript-eslint/space-infix-ops': jsConfig[jsConfig.length - 1].rules['space-infix-ops'],
    },
  },
]
