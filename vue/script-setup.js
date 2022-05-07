module.exports = {
  overrides: [
    {
      files: ['**/*.vue'],
      env: {
        'vue/setup-compiler-macros': true,
      },
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
