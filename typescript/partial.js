module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    require.resolve('./base.js'),
    require.resolve('./compatible.js'),
  ],
  overrides: [
    {
      files: [
        '**/*.cts',
        '**/*.mts',
        '**/*.ts',
        '**/*.tsx',
      ],
      extends: [
        require.resolve('./index.js'),
      ],
    },
  ],
}
