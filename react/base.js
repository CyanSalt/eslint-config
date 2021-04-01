module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  rules: {
    'react/forbid-foreign-prop-types': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': 'error',
    'react/sort-comp': 'warn',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    /** JSX */
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react/jsx-curly-newline': 'warn',
    'react/jsx-curly-spacing': ['warn', { when: 'never', allowMultiline: true }],
    'react/jsx-equals-spacing': 'warn',
    'react/jsx-first-prop-new-line': 'warn',
    'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-tag-spacing': ['warn', { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'never' }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
