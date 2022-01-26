module.exports = {
  rules: {
    // 自动优化单文件组件的标签顺序
    'vue/component-tags-order': ['warn', {
      order: [['script', 'template'], 'style'],
    }],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      env: {
        'vue/setup-compiler-macros': true,
      },
      globals: {
        // Vue macros
        $: 'readonly',
        $$: 'readonly',
        $ref: 'readonly',
        $shallowRef: 'readonly',
        $computed: 'readonly',
        $customRef: 'readonly',
        $toRef: 'readonly',
      },
    },
  ],
}
