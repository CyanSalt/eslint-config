module.exports = {
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
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
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
    // 使用 enum 必须指定初始值
    '@typescript-eslint/prefer-enum-initializers': 'error',
    // 自动修复类型标注的空格（冒号后空格，箭头前后空格）
    '@typescript-eslint/type-annotation-spacing': 'warn',
  },
}
