import stylisticJsPlugin from '@stylistic/eslint-plugin-js'
import { PATTERN_ALL } from './pattern.mjs'

export default [
  {
    files: [PATTERN_ALL],
    plugins: {
      '@stylistic/js': stylisticJsPlugin,
    },
    rules: {
      // 自动优化数组的两侧括号换行（前括号和后括号保持一致）
      '@stylistic/js/array-bracket-newline': ['warn', 'consistent'],
      // 自动删除数组的括号内侧的空格
      '@stylistic/js/array-bracket-spacing': 'warn',
      // 自动优化数组的元素换行（所有元素保持一致）
      '@stylistic/js/array-element-newline': ['warn', 'consistent'],
      // 自动在箭头函数的箭头前后添加空格
      '@stylistic/js/arrow-spacing': 'warn',
      // 自动优化花括号为 one true 风格（左侧花括号前不换行，else 前也不换行）
      '@stylistic/js/brace-style': 'warn',
      // 自动添加尾随逗号
      '@stylistic/js/comma-dangle': ['warn', 'always-multiline'],
      // 自动优化逗号的空格使用（逗号前禁止使用空格，逗号后必须使用空格）
      '@stylistic/js/comma-spacing': 'warn',
      // 自动移动行首的逗号至行尾
      '@stylistic/js/comma-style': 'warn',
      // 自动删除对象使用方括号取值时方括号内的空格
      '@stylistic/js/computed-property-spacing': 'warn',
      // 点号如果换行需要写在行首而非行尾
      '@stylistic/js/dot-location': ['error', 'property'],
      // 自动为文件末尾保留一行空行
      '@stylistic/js/eol-last': ['warn', 'always'],
      // 自动删除函数调用的括号前的空格
      '@stylistic/js/func-call-spacing': 'warn',
      // 自动优化函数调用的参数列表换行（所有元素保持一致）
      '@stylistic/js/function-call-argument-newline': ['warn', 'consistent'],
      // 自动优化函数声明的参数列表换行（所有元素保持一致）
      '@stylistic/js/function-paren-newline': ['warn', 'multiline-arguments'],
      // 自动优化缩进为两个空格
      '@stylistic/js/indent': ['warn', 2, {
        SwitchCase: 1,
        ignoredNodes: ['TSTypeParameterInstantiation'],
      }],
      // 自动替换 JSX 的属性引号为单引号
      '@stylistic/js/jsx-quotes': ['warn', 'prefer-single'],
      // 自动优化对象字面量冒号的空格使用（冒号前禁止使用空格，冒号后必须使用空格）
      '@stylistic/js/key-spacing': ['warn', { beforeColon: false, afterColon: true, mode: 'strict' }],
      // 自动在关键字前后添加空格
      '@stylistic/js/keyword-spacing': ['warn', { before: true, after: true }],
      // 自动将 CRLF 换行符替换为 LF
      '@stylistic/js/linebreak-style': 'warn',
      // 禁止单行超过 120 个字符
      '@stylistic/js/max-len': ['error', {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      // 禁止单行内出现多个语句
      '@stylistic/js/max-statements-per-line': 'error',
      // 自动为 new 调用的构造函数补全括号
      '@stylistic/js/new-parens': 'warn',
      // 箭头函数返回三元表达式时需要加括号（歧义）
      '@stylistic/js/no-confusing-arrow': ['error', { allowParens: true }],
      // 禁止多余的分号
      '@stylistic/js/no-extra-semi': 'error',
      // 禁止使用浮点小数
      '@stylistic/js/no-floating-decimal': 'error',
      // 自动删除连续的多个空格
      '@stylistic/js/no-multi-spaces': 'error',
      // 自动删除连续两个以上的空行
      '@stylistic/js/no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0, maxBOF: 0 }],
      // 禁止使用 tab 字符
      '@stylistic/js/no-tabs': 'error',
      // 自动删除行尾空格
      '@stylistic/js/no-trailing-spaces': 'warn',
      // 自动删除单行内的点号前后空格
      '@stylistic/js/no-whitespace-before-property': 'warn',
      // 自动在if等结构换行时添加花括号
      '@stylistic/js/nonblock-statement-body-position': ['warn', 'beside'],
      // 自动优化对象字面量、解构和导入的花括号换行（前括号和后括号保持一致）
      '@stylistic/js/object-curly-newline': ['warn', { consistent: true }],
      // 自动为对象字面量、解构和导入的花括号内侧添加空格
      '@stylistic/js/object-curly-spacing': ['warn', 'always'],
      // 自动优化对象属性换行（全部一行或全部换行）
      '@stylistic/js/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
      // 自动优化行尾操作符至下一行行首
      '@stylistic/js/operator-linebreak': ['warn', 'before'],
      // 自动删除不必要的对象字面量键的引号
      '@stylistic/js/quote-props': ['warn', 'as-needed'],
      // 自动替换字符串字面量的双引号
      '@stylistic/js/quotes': ['warn', 'single', { allowTemplateLiterals: true }],
      // 自动删除剩余和扩展运算符后的空格
      '@stylistic/js/rest-spread-spacing': 'warn',
      // 自动移除语句结尾的分号
      '@stylistic/js/semi': ['warn', 'never'],
      // 自动优化分号的空格使用（分号前禁止使用空格，分号后必须使用空格）
      '@stylistic/js/semi-spacing': ['warn', { before: false, after: true }],
      // 自动优化行首的分号至行尾
      '@stylistic/js/semi-style': ['warn', 'last'],
      // 自动在if等结构的声明块和代码块之间添加空格
      '@stylistic/js/space-before-blocks': 'warn',
      // 自动删除函数名和括号之间的空格，匿名函数除外
      '@stylistic/js/space-before-function-paren': ['warn', { named: 'never' }],
      // 自动删除括号内侧的空格
      '@stylistic/js/space-in-parens': 'warn',
      // 自动在多元操作符前后添加空格
      '@stylistic/js/space-infix-ops': 'warn',
      // 自动删除一元操作符的空格，自动为一元关键字添加空格
      '@stylistic/js/space-unary-ops': ['warn', { words: true, nonwords: false }],
      // 自动在注释内容前添加空格
      '@stylistic/js/spaced-comment': ['warn', 'always', { markers: ['/'] }],
      // 自动优化 case 语句冒号的空格使用（冒号前禁止使用空格，冒号后必须使用空格）
      '@stylistic/js/switch-colon-spacing': ['warn', { before: false }],
      // 自动删除模板字符串的插值花括号内侧空格
      '@stylistic/js/template-curly-spacing': 'warn',
      // 自动删除模板字符串标签后的空格
      '@stylistic/js/template-tag-spacing': 'warn',
      // 自动优化立即执行函数写法
      '@stylistic/js/wrap-iife': ['warn', 'inside', { functionPrototypeMethods: true }],
    },
  },
]
