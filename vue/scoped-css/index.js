module.exports = {
  extends: [
    'plugin:vue-scoped-css/vue3-recommended',
  ],
  rules: {
    // [覆盖 recommended] 允许使用未出现过的选择器
    'vue-scoped-css/no-unused-selector': 'off',
  },
}
