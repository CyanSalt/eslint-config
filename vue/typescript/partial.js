module.exports = {
  parserOptions: {
    parser: {
      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',
    },
    extraFileExtensions: ['.vue'],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      extends: [
        require.resolve('../../typescript/compatible.js'),
      ],
    },
  ],
}
