const path = require('path')

module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    path.resolve(__dirname, './base.js'),
  ],
  rules: {
    /** Strongly Recommended */
    'vue/require-explicit-emits': 'error',

    /** Uncategorized */
    'vue/no-unused-properties': ['error', {
      groups: ['data', 'computed', 'methods', 'setup'],
    }],
  },
}
