module.exports = {
  extends: [
    'plugin:vue-scoped-css/recommended',
  ],
  rules: {
    // [覆盖 recommended] 允许使用未出现过的选择器
    'vue-scoped-css/no-unused-selector': 'off',
  },
}
