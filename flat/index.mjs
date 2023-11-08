import jsConfig from '@eslint/js'
import globals from 'globals'
import { PATTERN_ALL } from './pattern.mjs'
import stylisticConfig from './stylistic.mjs'

export default [
  {
    ...jsConfig.configs.recommended,
    files: [PATTERN_ALL],
  },
  ...stylisticConfig,
  {
    files: [PATTERN_ALL],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      /** Possible Problems */
      // map等数组方法的回调函数必须有返回值
      'array-callback-return': 'error',
      // 禁止无效的二元操作
      'no-constant-binary-expression': 'error',
      // 禁止重复的 import
      'no-duplicate-imports': 'error',
      // 禁止使用 new 构造 Symbol 和 BigInt
      'no-new-native-nonconstructor': 'error',
      // 禁止变量与自身比较
      'no-self-compare': 'error',
      // 禁止不受循环影响的循环变量
      'no-unmodified-loop-condition': 'error',
      // 禁止循环固定执行单次
      'no-unreachable-loop': 'error',
      // 禁止定义未使用的私有类成员
      'no-unused-private-class-members': 'error',
      // [覆盖 recommended] 禁止定义未使用的变量，除了剩余参数和解构
      'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
      // 禁止定义前使用变量（ReferenceError）
      'no-use-before-define': ['error', { functions: false }],

      /** Suggestions */
      // default case 必须放在最后
      'default-case-last': 'error',
      // 默认参数必须放在最后
      'default-param-last': 'error',
      // 禁止使用 == 隐式类型转换
      eqeqeq: ['error', 'always'],
      // getter/setter 必须写在一起，且 getter 在前
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      // 禁止函数参数超过 5 个
      'max-params': ['error', { max: 5 }],
      // 禁止使用 Array 构造函数创建非空数组（歧义）
      'no-array-constructor': 'error',
      // 禁止使用位运算操作符
      'no-bitwise': 'error',
      // 禁止使用 arguments.caller 和 arguments.callee（已弃用）
      'no-caller': 'error',
      // 禁止空的静态块
      'no-empty-static-block': 'error',
      // 禁止使用 eval（安全性）
      'no-eval': 'error',
      // 禁止扩展原生对象
      'no-extend-native': 'error',
      // 自动删除无用的函数绑定
      'no-extra-bind': 'warn',
      // 禁止使用隐式的类型转换（!!、~等）
      'no-implicit-coercion': 'error',
      // 禁止使用 setTimeout 等函数的字符串参数（安全性）
      'no-implied-eval': 'error',
      // 禁止使用标签语句
      'no-labels': 'error',
      // 禁止无意义的代码块
      'no-lone-blocks': 'error',
      // 禁止连续赋值
      'no-multi-assign': 'error',
      // 禁止使用 Function 构造函数（安全性）
      'no-new-func': 'error',
      // 禁止将字符串/数字等原始值构造为对象
      'no-new-wrappers': 'error',
      // 禁止使用 Object 构造对象
      'no-object-constructor': 'error',
      // 禁止八进制转义（已弃用）
      'no-octal-escape': 'error',
      // 禁止使用 __proto__ 魔术属性（已弃用）
      'no-proto': 'error',
      // 禁止返回赋值语句
      'no-return-assign': 'error',
      // 禁止 for 循环之外的地方使用逗号表达式
      'no-sequences': ['error', { allowInParentheses: false }],
      // 禁止覆盖声明外部作用域的变量（歧义）
      'no-shadow': ['error', { hoist: 'functions' }],
      // 禁止抛出原始值
      'no-throw-literal': 'error',
      // 自动删除变量的 undefined 初始值
      'no-undef-init': 'warn',
      // 自动优化三元表达式
      'no-unneeded-ternary': 'warn',
      // 禁止使用某些表达式代替对应语句
      'no-unused-expressions': 'error',
      // 禁止无意义的 call 和 apply 操作（性能）
      'no-useless-call': 'error',
      // 自动删除对象字面量声明key时的方括号
      'no-useless-computed-key': 'warn',
      // 禁止单行内的字符串字面量拼接
      'no-useless-concat': 'error',
      // 自动删除不必要的 constructor 声明
      'no-useless-constructor': 'warn',
      // 自动优化 import 和解构时重命名为本身
      'no-useless-rename': 'warn',
      // 总是使用 let/const 而不是 var
      'no-var': 'error',
      // 自动优化对象字面量的值为简写
      'object-shorthand': ['warn', 'always'],
      // 禁止单个语句声明多个变量，除非没有指定初始值
      'one-var': ['error', { initialized: 'never' }],
      // 自动优化自涉的赋值操作
      'operator-assignment': 'warn',
      // 自动将 Object.assign 优化为对象展开
      'prefer-object-spread': 'warn',
      // Promise reject 必须使用 Error 实例
      'prefer-promise-reject-errors': 'error',
      // 禁止不必要的 Regex 字符串构造（可能造成转义错误）
      'prefer-regex-literals': 'error',
      // 禁止使用 arguments，而是使用剩余参数代替
      'prefer-rest-params': 'error',
      // 禁止无意义的 apply，而是使用扩展运算符代替
      'prefer-spread': 'error',
      // 使用 parseInt 时必须传递进制参数
      radix: 'error',
      // [覆盖 recommended] 允许生成器函数不使用 yield 关键字
      'require-yield': 'off',
      // 自动将 import 导入的名称按照字母顺序排列
      'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
      // 使用 Symbol 必须传递描述参数
      'symbol-description': 'error',

      /** Layout & Formatting */
      // 自动去除文件的 Unicode BOM 头
      'unicode-bom': 'warn',
    },
  },
]
