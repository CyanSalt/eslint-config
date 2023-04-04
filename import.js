module.exports = {
  plugins: [
    'import',
  ],
  settings: {
    'import/internal-regex': '^@/',
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: [
          '.cjs',
          '.cts',
          '.js',
          '.json',
          '.jsx',
          '.mjs',
          '.mts',
          '.ts',
          '.tsx',
          '.vue',
        ],
      },
      typescript: {
        extensions: [
          '.cts',
          '.mts',
          '.ts',
          '.tsx',
          '.vue',
        ],
      },
    },
  },
  rules: {
    // 自动将类型导入修改为 import type 语句
    'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
    // import 语句必须在最前
    'import/first': 'error',
    // 自动为 import 之后添加空行
    'import/newline-after-import': 'warn',
    // 自动修复重复的 import
    'no-duplicate-imports': 'off',
    'import/no-duplicates': 'warn',
    // 自动去除空的导入块
    'import/no-empty-named-blocks': 'warn',
    // 禁止导出 let 和 var 声明的可变变量
    'import/no-mutable-exports': 'error',
    // 必须按照 内置 > 外部模块 > aliases > '../' > './' 声明 import 顺序
    'import/order': ['warn', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: { order: 'asc', orderImportKind: 'asc' },
    }],
  },
}
