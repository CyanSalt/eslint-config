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
    'galaxy/import-extensions': ['warn', { '.ts': 'never', '.vue': 'always' }],
    // 自动移除模板引号内侧的空格
    'galaxy/vue-attribute-spacing': 'warn',
  },
}
