module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      extends: [
        require.resolve('../../typescript/extension.js'),
      ],
    },
  ],
}
