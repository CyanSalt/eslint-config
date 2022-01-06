module.exports = {
  plugins: [
    'import',
  ],
  rules: {
    // 禁止导出 let 和 var 声明的可变变量
    'import/no-mutable-exports': 'error',
    // import 语句必须在最前
    'import/first': 'error',
    // 自动修复重复的 import
    'no-duplicate-imports': 'off',
    'import/no-duplicates': 'warn',
    // 必须按照 内置 > 外部模块 > aliases > '../' > './' 声明 import 顺序
    'import/order': ['warn', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
      pathGroups: [{ pattern: '@/**', group: 'internal' }],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: { order: 'asc' },
    }],
    // 自动为 import 之后添加空行
    'import/newline-after-import': 'warn',
  },
}
