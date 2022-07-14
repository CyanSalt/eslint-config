const config = require('../index.js')

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    require.resolve('./base.js'),
  ],
  rules: {
    // 必须使用 type[] 定义数组类型
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    // 必须为 ts-* 注释指定描述
    '@typescript-eslint/ban-ts-comment': 'error',
    // [覆盖 recommended] 允许使用空对象/函数类型
    '@typescript-eslint/ban-types': 'off',
    // 自动将单一索引签名替换为 Record
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
    // 禁止使用尖括号类型断言
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow',
    }],
    // 自动替换 type 对象类型为 interface
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    // 自动将类型导出放置在 export type 语句中
    '@typescript-eslint/consistent-type-exports': 'warn',
    // 自动将类型引用放置在 import type 语句中
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    // 自动省略 public 成员修饰符
    '@typescript-eslint/explicit-member-accessibility': ['warn', {
      accessibility: 'no-public',
    }],
    // [覆盖 recommended] 允许导出成员使用推导类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 类型定义多行必须用逗号分隔
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
    // 禁止 enum 的值重复
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    // 禁止将类用作普通对象
    '@typescript-eslint/no-extraneous-class': 'error',
    // 禁止错误使用 Promise（包含异步函数的返回值）
    '@typescript-eslint/no-misused-promises': ['error', {
      checksVoidReturn: false,
    }],
    // 禁止在非空断言后使用空值合并运算符
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    // [覆盖 recommended] 允许使用非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 禁止使用构造函数参数属性
    '@typescript-eslint/no-parameter-properties': 'error',
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
    // 自动去除不必要的类型限制
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    // 自动去除多余的空 export
    '@typescript-eslint/no-useless-empty-export': 'warn',
    // [覆盖 recommended] 允许 require 引入
    '@typescript-eslint/no-var-requires': 'off',
    // 使用 enum 必须指定初始值
    '@typescript-eslint/prefer-enum-initializers': 'error',
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
    // 自动修复类型标注的空格（冒号后空格，箭头前后空格）
    '@typescript-eslint/type-annotation-spacing': 'warn',

    /** Extension Rules */
    // 自动优化花括号为 one true 风格（左侧花括号前不换行，else 前也不换行）
    'brace-style': 'off',
    '@typescript-eslint/brace-style': config.rules['brace-style'],
    // 自动添加尾随逗号
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': config.rules['comma-dangle'],
    // 自动优化逗号的空格使用（逗号前禁止使用空格，逗号后必须使用空格）
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': config.rules['comma-spacing'],
    // 默认参数必须放在最后
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': config.rules['default-param-last'],
    // 自动删除函数调用的括号前的空格
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': config.rules['func-call-spacing'],
    // 自动优化缩进为两个空格
    indent: 'off',
    '@typescript-eslint/indent': config.rules['indent'],
    // 自动在关键字前后添加空格
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': config.rules['keyword-spacing'],
    // 禁止使用 Array 构造函数创建非空数组（歧义）
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': config.rules['no-array-constructor'],
    // [扩展 recommended] 禁止类成员重复
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    // [扩展 recommended] 禁止多余的分号
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    // 禁止覆盖声明外部作用域的变量（歧义）
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { hoist: 'functions' }],
    // [覆盖 recommended] 禁止定义未使用的变量，除了剩余参数和解构
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': config.rules['no-unused-vars'],
    // 禁止定义前使用变量（ReferenceError）
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': config.rules['no-use-before-define'],
    // 禁止不必要的 constructor 声明（typescript 不支持自动修复）
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    // 自动为对象字面量、解构和导入的花括号内侧添加空格
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': config.rules['object-curly-spacing'],
    // [覆盖 recommended] 允许使用 let
    'prefer-const': 'off',
    // 自动替换字符串字面量的双引号
    quotes: 'off',
    '@typescript-eslint/quotes': config.rules['quotes'],
    // 自动在语句结尾添加分号
    semi: 'off',
    '@typescript-eslint/semi': config.rules['semi'],
    // 自动在if等结构的声明块和代码块之间添加空格
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': config.rules['space-before-blocks'],
    // 自动删除函数名和括号之间的空格，匿名函数除外
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': config.rules['space-before-function-paren'],
    // 自动在多元操作符前后添加空格
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': config.rules['space-infix-ops'],
  },
}
