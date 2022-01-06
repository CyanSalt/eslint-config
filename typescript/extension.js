const config = require('../index.js')

module.exports = {
  rules: {
    // 自动优化花括号为 one true 风格（左侧花括号前不换行，else 前也不换行）
    'brace-style': 'off',
    '@typescript-eslint/brace-style': config.rules['brace-style'],
    // 自动添加尾随逗号
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': config.rules['comma-dangle'],
    // 由 @typescript-eslint/naming-convention 声明
    camelcase: 'off',
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
    // 禁止重复的 import
    // 默认交由 import/no-duplicates 处理
    // 'no-duplicate-imports': 'off',
    // '@typescript-eslint/no-duplicate-imports': config.rules['no-duplicate-imports'],
    // [扩展 recommended] 禁止多余的分号
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    // 禁止覆盖声明外部作用域的变量（歧义）
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': config.rules['no-shadow'],
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
    // 自动删除函数名和括号之间的空格，匿名函数除外
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': config.rules['space-before-function-paren'],
    // 自动在多元操作符前后添加空格
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': config.rules['space-infix-ops'],
  },
}
