module.exports = {
  extends: [
    'plugin:galaxy/recommended-vue',
  ],
  rules: {
    'galaxy/import-extensions': ['warn', { '.vue': 'always' }],
    'galaxy/vue-attribute-spacing': 'warn',
  },
}
