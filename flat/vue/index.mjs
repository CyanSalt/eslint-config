import vuePlugin from 'eslint-plugin-vue'
import { PATTERN_ALL } from '../pattern.mjs'
import baseConfig from './base.mjs'
import commonConfig from './common.mjs'

export default [
  ...baseConfig,
  {
    files: [PATTERN_ALL],
    rules: {
      ...vuePlugin.configs['vue3-essential'].rules,
    },
  },
  ...commonConfig,
  {
    files: [PATTERN_ALL],
    rules: {
      /** Strongly Recommended */
      // 必须将事件声明在 emits 属性中
      'vue/require-explicit-emits': 'error',
    },
  },
]
