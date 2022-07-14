module.exports = {
  extends: [
    'plugin:@typescript-eslint/base',
    require.resolve('./base.js'),
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        require.resolve('./index.js'),
      ],
    },
  ],
}
