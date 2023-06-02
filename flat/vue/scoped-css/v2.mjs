import vueScopedCssPlugin from 'eslint-plugin-vue-scoped-css'
import { PATTERN_ALL } from '../../pattern.mjs'

export default [
  {
    files: [PATTERN_ALL],
    plugins: {
      'vue-scoped-css': vueScopedCssPlugin,
    },
    rules: {
      ...vueScopedCssPlugin.configs.recommended.rules,
      // [覆盖 recommended] 允许使用非 scoped 和 module 的 style 块
      'vue-scoped-css/enforce-style-type': 'off',
      // [覆盖 recommended] 允许使用未出现过的选择器
      'vue-scoped-css/no-unused-selector': 'off',
    },
  },
]
