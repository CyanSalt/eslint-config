module.exports = {
  rules: {
    // 自动修复错误的 props 定义
    'galaxy/valid-vue-reactivity-transform-props': 'warn',
    // 将 Reactivity Transform 的副作用变量标记为已使用
    'galaxy/vue-reactivity-transform-uses-vars': 'error',
    // 禁止混用 Ref 定义和 Reactivity Transform
    'galaxy/vue-ref-style': 'error',
  },
}
