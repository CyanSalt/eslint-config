module.exports = {
  extends: [
    'plugin:galaxy/recommended',
  ],
  rules: {
    // 自动为 if-else 结构增加花括号
    'galaxy/multi-branch-curly': 'warn',
    // 禁止 3 层及以上的解构赋值
    'galaxy/max-nested-destructuring': ['error', { max: 3 }],
    // 禁止使用 for-in 结构
    'galaxy/no-for-in': 'error',
    // 自动为非 return 语句的 if 结构增加花括号
    'galaxy/non-return-statement-curly': 'warn',
  },
}
