import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import { PATTERN_ALL } from '../pattern.mjs'

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
    },
    processor: vuePlugin.processors['.vue'],
  },
  {
    files: [PATTERN_ALL],
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs.base.rules,
    },
  },
]
