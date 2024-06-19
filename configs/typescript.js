import tseslint from 'typescript-eslint'
import { defineConfig, overrides } from '../config.js'
import { GLOB_ALL, GLOB_TS } from '../globs.js'
import stylisticTs from './stylistic-ts.js'

export default defineConfig(options => {
  if (!options.typescript) return []
  const mixed = options.typescript.mixed || options.vue && options.jsx
  return [
    ...tseslint.config(
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
    ),
    ...overrides(
      tseslint.config(...tseslint.configs.stylisticTypeChecked),
      {
        files: [mixed ? GLOB_TS : GLOB_ALL],
      },
    ),
    {
      languageOptions: {
        parserOptions: {
          project: true,
        },
      },
      rules: {
        'constructor-super': 'error',
        'getter-return': 'error',
        'no-const-assign': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-new-native-nonconstructor': 'error',
        'no-obj-calls': 'error',
        // TS overload
        // 'no-redeclare': 'error',
        'no-setter-return': 'error',
        'no-this-before-super': 'error',
        // Global namespaces
        // 'no-undef': 'error',
        'no-unreachable': 'error',
        'no-unsafe-negation': 'error',

        // [覆盖 recommended] 允许使用空对象/函数类型
        '@typescript-eslint/ban-types': 'off',
        // [覆盖 stylistic][需要 @typescript-eslint/parser]
        '@typescript-eslint/consistent-type-assertions': 'off',
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
        '@typescript-eslint/default-param-last': 'error',
        // [扩展 recommended] 禁止使用 Array 构造函数创建非空数组（歧义）
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        // 禁止类成员重复
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        // 禁止覆盖声明外部作用域的变量（歧义）
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error', { hoist: 'functions' }],
        // [扩展 recommended] 禁止定义未使用的变量，除了剩余参数和解构
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
        // 禁止定义前使用变量（ReferenceError）
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        // [继承 eslint-recommended] 允许使用 let
        'prefer-const': 'off',
        // [继承 eslint-recommended] 允许使用 arguments
        'prefer-rest-params': 'off',
        // [继承 eslint-recommended] 允许使用 apply
        'prefer-spread': 'off',
      },
    },
    ...stylisticTs(),
    {
      files: [mixed ? GLOB_TS : GLOB_ALL],
      rules: {
        // [继承 stylistic-type-checked][覆盖 compatible]
        '@typescript-eslint/consistent-type-assertions': 'error',
        // 自动将类型导出放置在 export type 语句中
        '@typescript-eslint/consistent-type-exports': 'warn',
        // 自动将类型引用放置在 import type 语句中
        '@typescript-eslint/consistent-type-imports': ['warn', {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
        }],
        // [覆盖 stylistic-type-checked] 允许使用方括号获取属性
        '@typescript-eslint/dot-notation': 'off',
        // 必须使用命名规则
        // 常规变量使用 camelCase，常量使用 UPPER_CASE，布尔类型的变量使用系动词前缀，类型声明使用 PascalCase，解构允许 snake_case
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase'],
          },
          {
            selector: 'default',
            format: null,
            filter: {
              regex: '^_+$',
              match: true,
            },
          },
          // for legacy Vue plugins
          {
            selector: 'parameter',
            format: ['PascalCase'],
            filter: {
              regex: '^Vue$',
              match: true,
            },
          },
          {
            selector: 'parameter',
            modifiers: ['destructured'],
            format: null,
          },
          {
            selector: 'memberLike',
            format: null,
          },
          {
            selector: 'variable',
            modifiers: ['const'],
            types: ['boolean', 'string', 'number'],
            format: ['camelCase', 'UPPER_CASE'],
          },
          {
            selector: 'variable',
            modifiers: ['const'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'variable',
            modifiers: ['destructured'],
            format: null,
          },
          // Override above
          {
            selector: 'variable',
            modifiers: ['destructured'],
            types: ['boolean', 'string', 'number'],
            format: null,
          },
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'import',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        // 禁止对数组使用 delete 操作符
        '@typescript-eslint/no-array-delete': 'error',
        // 禁止隐式的字符串类型转换
        '@typescript-eslint/no-base-to-string': 'error',
        // 禁止使用 void 类型的返回值
        '@typescript-eslint/no-confusing-void-expression': 'warn',
        // 禁止重复的类型交并操作
        '@typescript-eslint/no-duplicate-type-constituents': 'warn',
        // 禁止错误使用 Promise（包含异步函数的返回值）
        '@typescript-eslint/no-misused-promises': ['error', {
          checksVoidReturn: false,
        }],
        // 禁止无效的类型运算
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        // 禁止不必要的布尔值比较
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        // 禁止始终为真/假值的判断
        '@typescript-eslint/no-unnecessary-condition': 'error',
        // 禁止无用的命名空间调用
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        // 自动移除多余的类型转换
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        // 当仅使用数组第一项时，禁止使用 .filter 代替 .find
        '@typescript-eslint/prefer-find': 'error',
        // 必须使用 includes 而不是 indexOf 判断数组包含元素
        '@typescript-eslint/prefer-includes': 'error',
        // 必须使用空值合并运算符，而不是逻辑判断
        '@typescript-eslint/prefer-nullish-coalescing': ['error', {
          ignoreConditionalTests: true,
          ignorePrimitives: true,
        }],
        // 必须使用可选链运算符，而不是逻辑判断
        '@typescript-eslint/prefer-optional-chain': 'error',
        // 必须使用类型参数指定 Array#reduce 的类型，而不是对第二个参数强制类型声明
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        // 自动使用 this 类型替换写死的实例类型
        '@typescript-eslint/prefer-return-this-type': 'warn',
        // [覆盖 stylistic-type-checked] 允许使用正则等方式匹配字符串开头和结尾
        '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        // 必须为联合类型的 switch 判断指定完整的分支逻辑
        '@typescript-eslint/switch-exhaustiveness-check': 'error',

        /** Extension Rules */
        // 仅允许抛出 Error 类型错误
        'no-throw-literal': 'off',
        '@typescript-eslint/only-throw-error': 'error',
      },
    },
  ]
})
