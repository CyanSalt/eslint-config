module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    /** Possible Errors */
    // 禁止条件重复的 else if
    'no-dupe-else-if': 'error',
    // 禁止为导入的变量赋值
    'no-import-assign': 'error',
    // 禁止对可选链返回值进行运算
    'no-unsafe-optional-chaining': 'error',

    /** Best Practices */
    // map等数组方法的回调函数必须有返回值
    'array-callback-return': 'error',
    // default case 必须放在最后
    'default-case-last': 'error',
    // 默认参数必须放在最后
    'default-param-last': 'error',
    // 点号如果换行需要写在行首而非行尾
    'dot-location': ['error', 'property'],
    // 禁止使用 == 隐式类型转换
    eqeqeq: ['error', 'always'],
    // getter/setter 必须写在一起，且 getter 在前
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    // 禁止使用 arguments.caller 和 arguments.callee（已弃用）
    'no-caller': 'error',
    // 禁止使用 eval（安全性）
    'no-eval': 'error',
    // 禁止扩展原生对象
    'no-extend-native': 'error',
    // 自动删除无用的函数绑定
    'no-extra-bind': 'warn',
    // 禁止使用浮点小数
    'no-floating-decimal': 'error',
    // 禁止使用 setTimeout 等函数的字符串参数（安全性）
    'no-implied-eval': 'error',
    // 禁止使用 __iterator__ 魔术属性（已弃用）
    'no-iterator': 'error',
    // 禁止使用标签语句
    'no-labels': 'error',
    // 禁止使用隐式的类型转换（!!、~等）
    'no-implicit-coercion': 'error',
    // 禁止无意义的代码块
    'no-lone-blocks': 'error',
    // 自动删除连续的多个空格
    'no-multi-spaces': 'error',
    // 禁止使用 Function 构造函数（安全性）
    'no-new-func': 'error',
    // 禁止将字符串/数字等原始值构造为对象
    'no-new-wrappers': 'error',
    // 禁止非八进制数字转义
    'no-nonoctal-decimal-escape': 'error',
    // 禁止八进制转义（已弃用）
    'no-octal-escape': 'error',
    // 禁止使用 __proto__ 魔术属性（已弃用）
    'no-proto': 'error',
    // 禁止使用某些对象属性（已弃用）
    'no-restricted-properties': ['error', { property: '__defineGetter__' }, { property: '__defineSetter__' }],
    // 禁止返回赋值语句
    'no-return-assign': 'error',
    // 禁止变量与自身比较
    'no-self-compare': 'error',
    // 禁止 for 循环之外的地方使用逗号表达式
    'no-sequences': ['error', { allowInParentheses: false }],
    // 禁止抛出原始值
    'no-throw-literal': 'error',
    // 禁止使用某些表达式代替对应语句
    'no-unused-expressions': 'error',
    // 禁止无意义的 call 和 apply 操作（性能）
    'no-useless-call': 'error',
    // 禁止单行内的字符串字面量拼接
    'no-useless-concat': 'error',
    // Promise reject 必须使用 Error 实例
    'prefer-promise-reject-errors': 'error',
    // 禁止不必要的 Regex 字符串构造（可能造成转义错误）
    'prefer-regex-literals': 'error',
    // 使用 parseInt 时必须传递进制参数
    radix: 'error',
    // 自动优化立即执行函数写法
    'wrap-iife': ['warn', 'inside', { functionPrototypeMethods: true }],

    /** Variables */
    // 禁止使用可能是错误的全局变量，例如 event
    'no-restricted-globals': [
      'error',
      // builtin
      ...Object.getOwnPropertyNames(Object.prototype),
      // dom
      'blur',
      'close',
      'closed',
      'event',
      'external',
      'find',
      'focus',
      'length',
      'name',
      'open',
      'origin',
      'parent',
      'scroll',
      'status',
      'stop',
      'top',
    ],
    // 禁止覆盖声明外部作用域的变量（歧义）
    'no-shadow': ['error', { hoist: 'functions' }],
    // 自动删除变量的 undefined 初始值
    'no-undef-init': 'warn',
    // [覆盖 recommended] 禁止定义未使用的变量，除了剩余参数和解构
    'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
    // 禁止定义前使用变量（ReferenceError）
    'no-use-before-define': ['error', { functions: false }],

    /** Node.js and CommonJS */
    // 禁止使用 Buffer 构造函数（已弃用）
    'no-buffer-constructor': 'error',
    // 禁止对 require 调用 new（歧义）
    'no-new-require': 'error',
    // 禁止对 __dirname 和 __filename 进行字符串拼接（兼容性）
    'no-path-concat': 'error',

    /** Stylistic Issues */
    // 自动优化数组的两侧括号换行（前括号和后括号保持一致）
    'array-bracket-newline': ['warn', 'consistent'],
    // 自动删除数组的括号内侧的空格
    'array-bracket-spacing': 'warn',
    // 自动优化数组的元素换行（所有元素保持一致）
    'array-element-newline': ['warn', 'consistent'],
    // 自动优化花括号为 one true 风格（左侧花括号前不换行，else 前也不换行）
    'brace-style': 'warn',
    // 除了解构之外，变量名必须使用 camelCase
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    // 自动添加尾随逗号
    'comma-dangle': ['warn', 'always-multiline'],
    // 自动优化逗号的空格使用（逗号前禁止使用空格，逗号后必须使用空格）
    'comma-spacing': 'warn',
    // 自动移动行首的逗号至行尾
    'comma-style': 'warn',
    // 自动删除对象使用方括号取值时方括号内的空格
    'computed-property-spacing': 'warn',
    // 自动为文件末尾保留一行空行
    'eol-last': ['warn', 'always'],
    // 自动删除函数调用的括号前的空格
    'func-call-spacing': 'warn',
    // 自动优化函数调用的参数列表换行（所有元素保持一致）
    'function-call-argument-newline': ['warn', 'consistent'],
    // 自动优化函数声明的参数列表换行（所有元素保持一致）
    'function-paren-newline': ['warn', 'multiline-arguments'],
    // 自动优化缩进为两个空格
    indent: ['warn', 2, { SwitchCase: 1 }],
    // 自动替换 JSX 的属性引号为单引号
    'jsx-quotes': ['warn', 'prefer-single'],
    // 自动优化对象字面量冒号的空格使用（冒号前禁止使用空格，冒号后必须使用空格）
    'key-spacing': ['warn', { beforeColon: false, afterColon: true, mode: 'strict' }],
    // 自动在关键字前后添加空格
    'keyword-spacing': ['warn', { before: true, after: true }],
    // 自动将 CRLF 换行符替换为 LF
    'linebreak-style': 'warn',
    // 禁止单行超过 120 个字符
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    // 禁止函数参数超过 5 个
    'max-params': ['error', { max: 5 }],
    // 禁止单行内出现多个语句
    'max-statements-per-line': 'error',
    // 自动为 new 调用的构造函数补全括号
    'new-parens': 'warn',
    // 禁止使用 Array 构造函数创建非空数组（歧义）
    'no-array-constructor': 'error',
    // 禁止使用位运算操作符
    'no-bitwise': 'error',
    // 禁止连续赋值
    'no-multi-assign': 'error',
    // 自动删除连续两个以上的空行
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0, maxBOF: 0 }],
    // 禁止使用 Object 构造对象
    'no-new-object': 'error',
    // 禁用某些非最佳实践的语法，例如 for-in 循环、对 .indexOf() 返回值的隐式 boolean 类型转换
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      {
        selector: '[test.callee.property.name="indexOf"]',
        message: 'The return value of `.indexOf()` was used incorrectly',
      },
    ],
    // 自动删除行尾空格
    'no-trailing-spaces': 'warn',
    // 自动优化三元表达式
    'no-unneeded-ternary': 'warn',
    // 自动删除单行内的点号前后空格
    'no-whitespace-before-property': 'warn',
    // 自动在if等结构换行时添加花括号
    'nonblock-statement-body-position': ['warn', 'beside'],
    // 自动优化对象字面量、解构和导入的花括号换行（前括号和后括号保持一致）
    'object-curly-newline': ['warn', { consistent: true }],
    // 自动为对象字面量、解构和导入的花括号内侧添加空格
    'object-curly-spacing': ['warn', 'always'],
    // 自动优化对象属性换行（全部一行或全部换行）
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    // 禁止单个语句声明多个变量，除非没有指定初始值
    'one-var': ['error', { initialized: 'never' }],
    // 自动优化自涉的赋值操作
    'operator-assignment': 'warn',
    // 自动优化行尾操作符至下一行行首
    'operator-linebreak': ['warn', 'before'],
    // 自动将 Object.assign 优化为对象展开
    'prefer-object-spread': 'warn',
    // 自动删除不必要的对象字面量键的引号
    'quote-props': ['warn', 'as-needed'],
    // 自动替换字符串字面量的双引号
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    // 自动去除语句结尾的分号
    semi: ['warn', 'never'],
    // 自动优化分号的空格使用（分号前禁止使用空格，分号后必须使用空格）
    'semi-spacing': ['warn', { before: false, after: true }],
    // 自动优化行首的分号至行尾
    'semi-style': ['warn', 'last'],
    // 自动在if等结构的声明块和代码块之间添加空格
    'space-before-blocks': 'warn',
    // 自动删除函数名和括号之间的空格，匿名函数除外
    'space-before-function-paren': ['warn', { named: 'never' }],
    // 自动删除括号内侧的空格
    'space-in-parens': 'warn',
    // 自动在多元操作符前后添加空格
    'space-infix-ops': 'warn',
    // 自动删除一元操作符的空格，自动为一元关键字添加空格
    'space-unary-ops': ['warn', { words: true, nonwords: false }],
    // 自动在注释内容前添加空格
    'spaced-comment': ['warn', 'always', { markers: ['/'] }],
    // 自动优化 case 语句冒号的空格使用（冒号前禁止使用空格，冒号后必须使用空格）
    'switch-colon-spacing': ['warn', { before: false }],
    // 自动删除模板字符串标签后的空格
    'template-tag-spacing': 'warn',
    // 自动去除文件的 Unicode BOM 头
    'unicode-bom': 'warn',

    /** ECMAScript 6 */
    // 自动在箭头函数的箭头前后添加空格
    'arrow-spacing': 'warn',
    // 箭头函数返回三元表达式时需要加括号（歧义）
    'no-confusing-arrow': ['error', { allowParens: true }],
    // 禁止重复的 import
    'no-duplicate-imports': 'error',
    // 自动删除对象字面量声明key时的方括号
    'no-useless-computed-key': 'warn',
    // 自动删除不必要的 constructor 声明
    'no-useless-constructor': 'warn',
    // 自动优化 import 和解构时重命名为本身
    'no-useless-rename': 'warn',
    // 总是使用 let/const 而不是 var
    'no-var': 'error',
    // 自动优化对象字面量的值为简写
    'object-shorthand': ['warn', 'always'],
    // 禁止使用 arguments，而是使用剩余参数代替
    'prefer-rest-params': 'error',
    // 禁止无意义的 apply，而是使用扩展运算符代替
    'prefer-spread': 'error',
    // [覆盖 recommended] 允许生成器函数不使用 yield 关键字
    'require-yield': 'off',
    // 自动删除剩余和扩展运算符后的空格
    'rest-spread-spacing': 'warn',
    // 使用 Symbol 必须传递描述参数
    'symbol-description': 'error',
    // 自动删除模板字符串的插值花括号内侧空格
    'template-curly-spacing': 'warn',
  },
}
