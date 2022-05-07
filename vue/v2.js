module.exports = {
  extends: [
    'plugin:vue/essential',
    require.resolve('./base.js'),
  ],
  rules: {
    /** Essential for Vue.js 3.x */
    // 自动将 data 转化为函数格式
    'vue/no-deprecated-data-object-declaration': 'warn',
    // 禁止在 HTML 元素上使用 is 属性
    'vue/no-deprecated-html-element-is': 'error',
    // 禁止使用 inline-template 属性
    'vue/no-deprecated-inline-template': 'error',
    // 禁止在 props 的 default 函数中使用 this
    'vue/no-deprecated-props-default-this': 'error',
    // 自动将 scope 转化为 v-slot
    'vue/no-deprecated-scope-attribute': 'warn',
    // 自动将 slot 转化为 v-slot
    'vue/no-deprecated-slot-attribute': 'warn',
    // 自动将 slot-scope 转化为 v-slot
    'vue/no-deprecated-slot-scope-attribute': 'warn',
    // 自动将 keyCode 事件修饰符转化为 key
    'vue/no-deprecated-v-on-number-modifiers': 'warn',
    // 禁止使用 Vue.config.keyCodes
    'vue/no-deprecated-vue-config-keycodes': 'error',
    // [Composition API] 禁止在 setup 的 await 后使用生命周期钩子
    'vue/no-lifecycle-after-await': 'error',
    // [Composition API] 自动为错误使用的 ref 添加 .value
    'vue/no-ref-as-operand': 'warn',
    // [Composition API] 禁止在 setup 函数中对 props 解构
    'vue/no-setup-props-destructure': 'error',
    // [Composition API] 禁止在 setup 的 await 后使用 watch
    'vue/no-watch-after-await': 'error',
    // 禁止对静态条件包裹 <transition> 组件
    'vue/require-toggle-inside-transition': 'error',

    /** Uncategorized */
    // 未使用的属性必须使用 /** @public */ 标记，但不检查 props
    'vue/no-unused-properties': ['error', {
      groups: ['data', 'computed', 'methods', 'setup'],
      ignorePublicMembers: true,
    }],
  },
}
