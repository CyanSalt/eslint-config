module.exports = {
  extends: [
    'plugin:galaxy/recommended-vue',
  ],
  rules: {
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
    'galaxy/import-extensions': ['warn', { '.vue': 'always' }],
    'galaxy/vue-attribute-spacing': 'warn',
  },
}
