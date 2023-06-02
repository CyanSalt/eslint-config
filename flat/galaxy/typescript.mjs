import galaxyPlugin from 'eslint-plugin-galaxy'
import { PATTERN_ALL } from '../pattern.mjs'

export default [
  {
    files: [PATTERN_ALL],
    plugins: {
      galaxy: galaxyPlugin,
    },
    rules: {
      // 禁止使用 `as any`
      'galaxy/no-as-any': 'error',
    },
  },
]
