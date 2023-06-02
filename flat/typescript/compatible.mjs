import jsConfig from '../index.mjs'
import { PATTERN_ALL } from '../pattern.mjs'

export default [
  {
    files: [PATTERN_ALL],
    rules: {
      /** Recommended */
      // 方法重载必须放在一起声明
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      // 必须为 ts-* 注释指定描述
      '@typescript-eslint/ban-ts-comment': 'error',
      // 禁止空 interface
      '@typescript-eslint/no-empty-interface': 'error',
      // 禁止不必要的非空断言
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      // 禁止显式声明能自动推导的类型
      '@typescript-eslint/no-inferrable-types': 'error',
      // 禁止类型声明中 new 的错误使用
      '@typescript-eslint/no-misused-new': 'error',
      // 禁止使用运行时 namespace
      '@typescript-eslint/no-namespace': 'error',
      // 禁止在可选链后使用非空断言
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      // 自动去除不必要的类型限制
      '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
      // 必须使用 as const 而不是字面量强制类型声明
      '@typescript-eslint/prefer-as-const': 'error',
      // 必须使用 namespace 关键字而不是 module 关键字
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      // 禁止使用三斜线类型导入
      '@typescript-eslint/triple-slash-reference': 'error',

      // 必须使用 type[] 定义数组类型
      '@typescript-eslint/array-type': ['error', { default: 'array' }],
      // 自动将变量类型合并至构造函数类型参数
      '@typescript-eslint/consistent-generic-constructors': 'warn',
      // 自动将单一索引签名替换为 Record
      '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
      // 禁止使用尖括号类型断言
      '@typescript-eslint/consistent-type-assertions': ['error', {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      }],
      // 自动替换 type 对象类型为 interface
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
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
      // 禁止 enum 的值重复
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      // 禁止在非空断言后使用空值合并运算符
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      // 禁止使用构造函数参数属性
      '@typescript-eslint/no-parameter-properties': 'error',
      // 禁止接口与类的类型合并
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      // 自动去除多余的空 export
      '@typescript-eslint/no-useless-empty-export': 'warn',
      // 使用 enum 必须指定初始值
      '@typescript-eslint/prefer-enum-initializers': 'error',
      // 自动修复类型标注的空格（冒号后空格，箭头前后空格）
      '@typescript-eslint/type-annotation-spacing': 'warn',

      /** Extension Rules */
      // 自动优化花括号为 one true 风格（左侧花括号前不换行，else 前也不换行）
      'brace-style': 'off',
      '@typescript-eslint/brace-style': jsConfig[1].rules['brace-style'],
      // 自动添加尾随逗号
      'comma-dangle': 'off',
      '@typescript-eslint/comma-dangle': jsConfig[1].rules['comma-dangle'],
      // 自动优化逗号的空格使用（逗号前禁止使用空格，逗号后必须使用空格）
      'comma-spacing': 'off',
      '@typescript-eslint/comma-spacing': jsConfig[1].rules['comma-spacing'],
      // 默认参数必须放在最后
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': jsConfig[1].rules['default-param-last'],
      // 自动删除函数调用的括号前的空格
      'func-call-spacing': 'off',
      '@typescript-eslint/func-call-spacing': jsConfig[1].rules['func-call-spacing'],
      // 自动优化缩进为两个空格
      indent: 'off',
      '@typescript-eslint/indent': jsConfig[1].rules['indent'],
      // 自动优化对象字面量冒号的空格使用（冒号前禁止使用空格，冒号后必须使用空格）
      'key-spacing': 'off',
      '@typescript-eslint/key-spacing': jsConfig[1].rules['key-spacing'],
      // 自动在关键字前后添加空格
      'keyword-spacing': 'off',
      '@typescript-eslint/keyword-spacing': jsConfig[1].rules['keyword-spacing'],
      // [继承 recommended] 禁止使用 Array 构造函数创建非空数组（歧义）
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': jsConfig[1].rules['no-array-constructor'],
      // [扩展 recommended] 禁止类成员重复
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'error',
      // [扩展 recommended] 禁止多余的分号
      'no-extra-semi': 'off',
      '@typescript-eslint/no-extra-semi': 'error',
      // [扩展 recommended] 禁止使用 JS 不支持的数字精度
      'no-loss-of-precision': 'off',
      '@typescript-eslint/no-loss-of-precision': 'error',
      // 禁止覆盖声明外部作用域的变量（歧义）
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error', { hoist: 'functions' }],
      // [覆盖 recommended] 禁止定义未使用的变量，除了剩余参数和解构
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': jsConfig[1].rules['no-unused-vars'],
      // 禁止定义前使用变量（ReferenceError）
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': jsConfig[1].rules['no-use-before-define'],
      // 禁止不必要的 constructor 声明（typescript 不支持自动修复）
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      // 自动为对象字面量、解构和导入的花括号内侧添加空格
      'object-curly-spacing': 'off',
      '@typescript-eslint/object-curly-spacing': jsConfig[1].rules['object-curly-spacing'],
      // [覆盖 recommended] 允许使用 let
      'prefer-const': 'off',
      // [覆盖 recommended] 允许使用 arguments
      'prefer-rest-params': 'off',
      // [覆盖 recommended] 允许使用 apply
      'prefer-spread': 'off',
      // 自动替换字符串字面量的双引号
      quotes: 'off',
      '@typescript-eslint/quotes': jsConfig[1].rules['quotes'],
      // 自动在语句结尾添加分号
      semi: 'off',
      '@typescript-eslint/semi': jsConfig[1].rules['semi'],
      // 自动在if等结构的声明块和代码块之间添加空格
      'space-before-blocks': 'off',
      '@typescript-eslint/space-before-blocks': jsConfig[1].rules['space-before-blocks'],
      // 自动删除函数名和括号之间的空格，匿名函数除外
      'space-before-function-paren': 'off',
      '@typescript-eslint/space-before-function-paren': jsConfig[1].rules['space-before-function-paren'],
      // 自动在多元操作符前后添加空格
      'space-infix-ops': 'off',
      '@typescript-eslint/space-infix-ops': jsConfig[1].rules['space-infix-ops'],
    },
  },
]
