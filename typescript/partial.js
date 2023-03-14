module.exports = {
  extends: [
    'plugin:@typescript-eslint/base',
    require.resolve('./base.js'),
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
