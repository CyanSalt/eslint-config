module.exports = {
  extends: [
    require.resolve('./base.js'),
  ],
  rules: {
    // 自动替换已废弃的 ::v-deep 操作符
    'galaxy/no-deprecated-vue-deep-combinator': 'warn',
  },
}
