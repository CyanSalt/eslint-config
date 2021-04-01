module.exports = {
  plugins: [
    'import',
  ],
  rules: {
    'import/no-mutable-exports': 'error',
    'import/first': 'error',
    // Use no-duplicate-imports
    // 'import/no-duplicates': 'warn',
    'import/order': ['warn', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
      pathGroups: [{ pattern: '@/**', group: 'internal' }],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: { order: 'asc' },
    }],
    'import/newline-after-import': 'warn',
  },
}
