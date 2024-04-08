module.exports = {
  parserOptions: {
    project: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'constructor-super': 'error',
    'getter-return': 'error',
    'no-const-assign': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    // TS overload
    // 'no-redeclare': 'error',
    'no-setter-return': 'error',
    'no-this-before-super': 'error',
    // Global namespaces
    // 'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unsafe-negation': 'error',
  },
}
