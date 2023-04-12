module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    require.resolve('./base.js'),
    require.resolve('./compatible.js'),
  ],
  rules: {
    // [覆盖 recommended] 允许使用空对象/函数类型
    '@typescript-eslint/ban-types': 'off',
    // 自动将类型导出放置在 export type 语句中
    '@typescript-eslint/consistent-type-exports': 'warn',
    // [覆盖 recommended] 允许导出成员使用推导类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
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
    // [覆盖 recommended] 允许使用空函数
    '@typescript-eslint/no-empty-function': 'off',
    // [覆盖 recommended] 允许使用 any 类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 禁止使用 void 类型的返回值
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    // 禁止重复的类型交并操作
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    // 禁止错误使用 Promise（包含异步函数的返回值）
    '@typescript-eslint/no-misused-promises': ['error', {
      checksVoidReturn: false,
    }],
    // [覆盖 recommended] 允许使用非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 禁止无效的类型运算
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    // [覆盖 recommended] 允许 this 别名
    '@typescript-eslint/no-this-alias': 'off',
    // 禁止将字面量作为异常抛出
    '@typescript-eslint/no-throw-literal': 'error',
    // 禁止不必要的布尔值比较
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    // 禁止始终为真/假值的判断
    '@typescript-eslint/no-unnecessary-condition': 'error',
    // 禁止无用的命名空间调用
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    // [覆盖 recommended] 允许 require 引入
    '@typescript-eslint/no-var-requires': 'off',
    // 必须使用 includes 而不是 indexOf 判断数组包含元素
    '@typescript-eslint/prefer-includes': 'error',
    // 必须使用空值合并运算符，而不是逻辑判断
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    // 必须使用可选链运算符，而不是逻辑判断
    '@typescript-eslint/prefer-optional-chain': 'error',
    // 必须使用类型参数指定 Array#reduce 的类型，而不是对第二个参数强制类型声明
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    // 自动使用 this 类型替换写死的实例类型
    '@typescript-eslint/prefer-return-this-type': 'warn',
    // 必须为联合类型的 switch 判断指定完整的分支逻辑
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
  },
}
