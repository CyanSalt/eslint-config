module.exports = {
  parserOptions: {
    parser: {
      cts: '@typescript-eslint/parser',
      mts: '@typescript-eslint/parser',
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
