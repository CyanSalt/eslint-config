import galaxyPlugin from 'eslint-plugin-galaxy'
import { PATTERN_ALL } from '../../pattern.mjs'

export default [
  {
    files: [PATTERN_ALL],
    plugins: {
      galaxy: galaxyPlugin,
    },
    rules: {
      // 自动修复错误的 props 定义
      'galaxy/valid-vue-reactivity-transform-props': 'warn',
      // 将 Reactivity Transform 的副作用变量标记为已使用
      'galaxy/vue-reactivity-transform-uses-vars': 'error',
    },
  },
]
