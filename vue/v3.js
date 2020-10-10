const path = require('path')

module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    path.resolve(__dirname, './base.js'),
    path.resolve(__dirname, './plugin-v7.js'),
  ],
  rules: {
    /** Strongly Recommended */
    'vue/require-explicit-emits': 'error',
  },
}
