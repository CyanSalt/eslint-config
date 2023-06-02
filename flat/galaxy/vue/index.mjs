import { PATTERN_ALL } from '../../pattern.mjs'
import baseConfig from './base.mjs'

export default [
  ...baseConfig,
  {
    files: [PATTERN_ALL],
    rules: {
      // 自动替换已废弃的 ::v-deep 操作符
      'galaxy/no-deprecated-vue-deep-combinator': 'warn',
    },
  },
]
