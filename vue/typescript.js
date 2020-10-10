const path = require('path')

module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      extends: [
        path.resolve(__dirname, '../typescript/extension.js'),
      ],
    },
  ],
}
