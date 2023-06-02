export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: {
          js: '@babel/eslint-parser',
          jsx: '@babel/eslint-parser',
        },
      },
    },
  },
]
