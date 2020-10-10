const config = require('../index.js')

module.exports = {
  rules: {
    'brace-style': 'off',
    '@typescript-eslint/brace-style': config.rules['brace-style'],
    // Declared by @typescript-eslint/naming-convention
    camelcase: 'off',
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': config.rules['comma-spacing'],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': config.rules['default-param-last'],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': config.rules['func-call-spacing'],
    indent: 'off',
    '@typescript-eslint/indent': config.rules['indent'],
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': config.rules['keyword-spacing'],
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': config.rules['no-array-constructor'],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    // extends recommended
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': config.rules['no-shadow'],
    // overwrite recommended
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': config.rules['no-unused-vars'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': config.rules['no-use-before-define'],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    quotes: 'off',
    '@typescript-eslint/quotes': config.rules['quotes'],
    semi: 'off',
    '@typescript-eslint/semi': config.rules['semi'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': config.rules['space-before-function-paren'],
  },
}
