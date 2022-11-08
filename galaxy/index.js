module.exports = {
  extends: [
    'plugin:galaxy/recommended',
  ],
  rules: {
    // 自动移除 .ts 文件的导入后缀
    'galaxy/import-extensions': ['warn', { '.ts': 'never' }],
    // 自动为 if-else 结构增加花括号
    'galaxy/multi-branch-curly': 'warn',
    // 禁止 3 层及以上的解构赋值
    'galaxy/max-nested-destructuring': ['error', { max: 3 }],
    // 禁止使用 for-in 结构
    'galaxy/no-for-in': 'error',
    // 自动为非控制语句的 if 结构增加花括号
    'galaxy/non-control-statement-curly': 'warn',
  },
}
