module.exports = {
  overrides: [
    {
      files: ['**/*.vue'],
      globals: {
        // Vue macros
        $: 'readonly',
        $$: 'readonly',
        $ref: 'readonly',
        $shallowRef: 'readonly',
        $computed: 'readonly',
        $customRef: 'readonly',
        $toRef: 'readonly',
      },
    },
  ],
}
