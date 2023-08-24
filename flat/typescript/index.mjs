import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import { PATTERN_ALL } from '../pattern.mjs'
import baseConfig from './base.mjs'
import compatibleConfig from './compatible.mjs'

export default [
  ...baseConfig,
  ...typescriptEslintPlugin.configs['eslint-recommended'].overrides,
  {
    files: [PATTERN_ALL],
    rules: typescriptEslintPlugin.configs['stylistic-type-checked'].rules,
  },
  ...compatibleConfig,
  {
    files: [PATTERN_ALL],
    rules: {
      // 自动将类型导出放置在 export type 语句中
      '@typescript-eslint/consistent-type-exports': 'warn',
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
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
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
      // 禁止将字面量作为异常抛出
      '@typescript-eslint/no-throw-literal': 'error',
      // 禁止不必要的布尔值比较
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      // 禁止始终为真/假值的判断
      '@typescript-eslint/no-unnecessary-condition': 'error',
      // 禁止无用的命名空间调用
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      // 必须使用 includes 而不是 indexOf 判断数组包含元素
      '@typescript-eslint/prefer-includes': 'error',
      // 必须使用空值合并运算符，而不是逻辑判断
      '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignorePrimitives: true }],
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
    },
  },
]
