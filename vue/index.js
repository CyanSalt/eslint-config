module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    require.resolve('./base.js'),
    require.resolve('./macro.js'),
  ],
  rules: {
    /** Strongly Recommended */
    // 必须将事件声明在 emits 属性中
    'vue/require-explicit-emits': 'error',
  },
}
