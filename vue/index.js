module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    require.resolve('./base.js'),
  ],
  rules: {
    /** Strongly Recommended */
    // 必须将事件声明在 emits 属性中
    'vue/require-explicit-emits': 'error',

    /** Uncategorized */
    // 禁止未使用的属性，但不检查 props
    'vue/no-unused-properties': ['error', {
      groups: ['data', 'computed', 'methods', 'setup'],
    }],
  },
}
