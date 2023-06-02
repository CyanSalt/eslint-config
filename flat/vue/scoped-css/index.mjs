import vueScopedCssPlugin from 'eslint-plugin-vue-scoped-css'
import { PATTERN_ALL } from '../../pattern.mjs'

export default [
  {
    files: [PATTERN_ALL],
    plugins: {
      'vue-scoped-css': vueScopedCssPlugin,
    },
    rules: {
      ...vueScopedCssPlugin.configs['vue3-recommended'].rules,
      // [覆盖 recommended] 允许使用未出现过的选择器
      'vue-scoped-css/no-unused-selector': 'off',
    },
  },
]
