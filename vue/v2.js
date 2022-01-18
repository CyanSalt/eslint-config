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
    // 自动将 slot-scope 转化为 v-slot
    'vue/no-deprecated-slot-scope-attribute': 'warn',
    // 自动将 keyCode 事件修饰符转化为 key
    'vue/no-deprecated-v-on-number-modifiers': 'warn',
    // 禁止使用 Vue.config.keyCodes
    'vue/no-deprecated-vue-config-keycodes': 'error',
    // 禁止对静态条件包裹 <transition> 组件
    'vue/require-toggle-inside-transition': 'error',

    /** Recommended */
    // 自动优化单文件组件的标签顺序
    'vue/component-tags-order': ['warn', {
      order: ['template', 'script', 'style'],
    }],
  },
}
