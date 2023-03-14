module.exports = {
  extends: [
    'plugin:galaxy/recommended-vue',
  ],
  rules: {
    // 自动调整组件选项内的属性顺序
    'galaxy/conventional-vue-keys-order': ['warn', {
      rules: [
        'model',
        // 'props',
        'props-properties',
        'inject-properties',
        // 'emits',
        'data-return',
        // 'computed',
        'computed-strict',
        'watch-properties',
        // 'methods',
        'methods-strict',
      ],
    }],
    // 自动为 .vue 导入添加后缀
    'galaxy/import-extensions': ['warn', {
      '.cts': 'never',
      '.mts': 'never',
      '.ts': 'never',
      '.tsx': 'never',
      '.vue': 'always',
    }],
    // 禁止使用歧义的 props 默认值
    'galaxy/no-ambiguous-vue-default-props': 'error',
    // 自动移除模板引号内侧的空格
    'galaxy/vue-attribute-spacing': 'warn',
  },
}
