module.exports = {
  extends: [
    'plugin:vue/essential',
    require.resolve('./base.js'),
  ],
  rules: {
    /** Recommended */
    // 自动优化单文件组件的标签顺序
    'vue/component-tags-order': ['warn', {
      order: ['template', 'script', 'style'],
    }],
  },
}
