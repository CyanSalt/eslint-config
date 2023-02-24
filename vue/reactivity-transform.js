module.exports = {
  globals: {
    $: 'readonly',
    $$: 'readonly',
    $ref: 'readonly',
    $shallowRef: 'readonly',
    $computed: 'readonly',
    $customRef: 'readonly',
    $toRef: 'readonly',
  },
  rules: {
    // [覆盖 essential] 允许 defineProps 解构
    'vue/no-setup-props-destructure': 'off',
  },
}
