import { PATTERN_ALL } from '../pattern.mjs'

export default [
  {
    files: [PATTERN_ALL],
    languageOptions: {
      globals: {
        $: 'readonly',
        $$: 'readonly',
        $ref: 'readonly',
        $shallowRef: 'readonly',
        $computed: 'readonly',
        $customRef: 'readonly',
        $toRef: 'readonly',
      },
    },
    rules: {
      // [覆盖 essential] 允许 defineProps 解构
      'vue/no-setup-props-reactivity-loss': 'off',
    },
  },
]
