module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        require.resolve('./base.js'),
        require.resolve('./extension.js'),
      ],
    },
  ],
}
