import typescriptCompatibleConfig from '../../typescript/compatible.mjs'

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: {
          cts: '@typescript-eslint/parser',
          mts: '@typescript-eslint/parser',
          ts: '@typescript-eslint/parser',
          tsx: '@typescript-eslint/parser',
        },
        extraFileExtensions: ['.vue'],
      },
    },
  },
  ...typescriptCompatibleConfig,
]
