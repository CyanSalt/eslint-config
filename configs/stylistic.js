import stylisticPlugin from '@stylistic/eslint-plugin'
import { defineConfig } from '../config.js'

export default defineConfig(options => {
  return [
    {
      name: '@cyansalt/stylistic/setup',
      plugins: {
        '@stylistic': stylisticPlugin,
      },
      rules: {
        // 自动优化数组的两侧括号换行（前括号和后括号保持一致）
        '@stylistic/array-bracket-newline': ['warn', 'consistent'],
        // 自动删除数组的括号内侧的空格
        '@stylistic/array-bracket-spacing': 'warn',
        // 自动优化数组的元素换行（所有元素保持一致）
        '@stylistic/array-element-newline': ['warn', 'consistent'],
        // 自动在箭头函数的箭头前后添加空格
        '@stylistic/arrow-spacing': 'warn',
        // 自动优化花括号为 one true 风格（左侧花括号前不换行，else 前也不换行）
        '@stylistic/brace-style': 'warn',
        // 自动添加尾随逗号，除了动态导入（兼容性）
        '@stylistic/comma-dangle': ['warn', {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
          importAttributes: 'always-multiline',
          dynamicImports: 'never',
          // for TypeScript
          enums: 'always-multiline',
          generics: 'always-multiline',
          tuples: 'always-multiline',
        }],
        // 自动优化逗号的空格使用（逗号前禁止使用空格，逗号后必须使用空格）
        '@stylistic/comma-spacing': 'warn',
        // 自动移动行首的逗号至行尾
        '@stylistic/comma-style': 'warn',
        // 自动删除对象使用方括号取值时方括号内的空格
        '@stylistic/computed-property-spacing': 'warn',
        // 点号如果换行需要写在行首而非行尾
        '@stylistic/dot-location': ['error', 'property'],
        // 自动为文件末尾保留一行空行
        '@stylistic/eol-last': ['warn', 'always'],
        // 自动优化函数调用的参数列表换行（所有元素保持一致）
        '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
        // 自动删除函数调用的括号前的空格
        '@stylistic/function-call-spacing': 'warn',
        // 自动优化函数声明的参数列表换行（所有元素保持一致）
        '@stylistic/function-paren-newline': ['warn', 'multiline-arguments'],
        // 自动优化缩进为两个空格
        '@stylistic/indent': ['warn', 2, {
          SwitchCase: 1,
          ignoredNodes: ['TSTypeParameterInstantiation'],
        }],
        // 自动替换 JSX 的属性引号为单引号
        '@stylistic/jsx-quotes': ['warn', 'prefer-single'],
        // 自动优化对象字面量冒号的空格使用（冒号前禁止使用空格，冒号后必须使用空格）
        '@stylistic/key-spacing': ['warn', { beforeColon: false, afterColon: true, mode: 'strict' }],
        // 自动在关键字前后添加空格
        '@stylistic/keyword-spacing': ['warn', { before: true, after: true }],
        // 自动将 CRLF 换行符替换为 LF
        '@stylistic/linebreak-style': 'warn',
        // 禁止单行超过 120 个字符
        '@stylistic/max-len': ['error', {
          code: 120,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        }],
        // 禁止单行内出现多个语句
        '@stylistic/max-statements-per-line': 'error',
        // 类型定义必须用逗号分隔
        '@stylistic/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        }],
        // 自动为 new 调用的构造函数补全括号
        '@stylistic/new-parens': 'warn',
        // 箭头函数返回三元表达式时需要加括号（歧义）
        '@stylistic/no-confusing-arrow': ['error', { allowParens: true }],
        // 禁止多余的分号
        '@stylistic/no-extra-semi': 'error',
        // 禁止使用浮点小数
        '@stylistic/no-floating-decimal': 'error',
        // 自动删除连续的多个空格
        '@stylistic/no-multi-spaces': 'error',
        // 自动删除连续两个以上的空行
        '@stylistic/no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0, maxBOF: 0 }],
        // 禁止使用 tab 字符
        '@stylistic/no-tabs': 'error',
        // 自动删除行尾空格
        '@stylistic/no-trailing-spaces': 'warn',
        // 自动删除单行内的点号前后空格
        '@stylistic/no-whitespace-before-property': 'warn',
        // 自动在if等结构换行时添加花括号
        '@stylistic/nonblock-statement-body-position': ['warn', 'beside'],
        // 自动优化对象字面量、解构和导入的花括号换行（前括号和后括号保持一致）
        '@stylistic/object-curly-newline': ['warn', { consistent: true }],
        // 自动为对象字面量、解构和导入的花括号内侧添加空格
        '@stylistic/object-curly-spacing': ['warn', 'always'],
        // 自动优化对象属性换行（全部一行或全部换行）
        '@stylistic/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
        // 自动优化行尾操作符至下一行行首
        '@stylistic/operator-linebreak': ['warn', 'before'],
        // 自动删除不必要的对象字面量键的引号
        '@stylistic/quote-props': ['warn', 'as-needed'],
        // 自动替换字符串字面量的双引号
        '@stylistic/quotes': ['warn', 'single', { allowTemplateLiterals: 'always' }],
        // 自动删除剩余和扩展运算符后的空格
        '@stylistic/rest-spread-spacing': 'warn',
        // 自动移除语句结尾的分号
        '@stylistic/semi': ['warn', 'never'],
        // 自动优化分号的空格使用（分号前禁止使用空格，分号后必须使用空格）
        '@stylistic/semi-spacing': ['warn', { before: false, after: true }],
        // 自动优化行首的分号至行尾
        '@stylistic/semi-style': ['warn', 'last'],
        // 自动在if等结构的声明块和代码块之间添加空格
        '@stylistic/space-before-blocks': 'warn',
        // 自动删除函数名和括号之间的空格，匿名函数除外
        '@stylistic/space-before-function-paren': ['warn', { named: 'never' }],
        // 自动删除括号内侧的空格
        '@stylistic/space-in-parens': 'warn',
        // 自动在多元操作符前后添加空格
        '@stylistic/space-infix-ops': 'warn',
        // 自动删除一元操作符的空格，自动为一元关键字添加空格
        '@stylistic/space-unary-ops': ['warn', { words: true, nonwords: false }],
        // 自动在注释内容前添加空格
        '@stylistic/spaced-comment': ['warn', 'always', { markers: ['/'] }],
        // 自动优化 case 语句冒号的空格使用（冒号前禁止使用空格，冒号后必须使用空格）
        '@stylistic/switch-colon-spacing': ['warn', { before: false }],
        // 自动删除模板字符串的插值花括号内侧空格
        '@stylistic/template-curly-spacing': 'warn',
        // 自动删除模板字符串标签后的空格
        '@stylistic/template-tag-spacing': 'warn',
        // 自动修复类型标注的空格（冒号后空格，箭头前后空格）
        '@stylistic/type-annotation-spacing': 'warn',
        // 自动优化类型参数间的空格
        '@stylistic/type-generic-spacing': 'warn',
        // 自动优化命名类型元组间的空格
        '@stylistic/type-named-tuple-spacing': 'warn',
        // 自动优化立即执行函数写法
        '@stylistic/wrap-iife': ['warn', 'inside', { functionPrototypeMethods: true }],
      },
    },
  ]
})
