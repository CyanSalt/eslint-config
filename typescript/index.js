module.exports = {
  extends: [
    require.resolve('./base.js'),
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        require.resolve('./extension.js'),
      ],
    },
  ],
}
