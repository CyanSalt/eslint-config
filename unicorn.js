/**
 * Supports eslint-plugin-unicorn@^28.0.2
 */
module.exports = {
  // extends: [
  //   'plugin:unicorn/recommended',
  // ],
  plugins: [
    'unicorn',
  ],
  rules: {
    'unicorn/empty-brace-spaces': 'warn',
    'unicorn/error-message': 'error',
    'unicorn/filename-case': ['error', {
      cases: {
        kebabCase: true,
      },
    }],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-dataset': 'warn',
    'unicorn/prefer-date-now': 'warn',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-flat-map': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-negative-index': 'warn',
    'unicorn/prefer-node-remove': 'warn',
    'unicorn/prefer-optional-catch-binding': 'warn',
    'unicorn/prefer-text-content': 'warn',
    'unicorn/prefer-string-slice': 'warn',
    'unicorn/prefer-trim-start-end': 'warn',
    'unicorn/throw-new-error': 'error',
  },
}
