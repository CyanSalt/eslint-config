module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  rules: {
    // 禁止使用导入组件的 propsTypes 属性，以便生产环境安全移除 propTypes
    'react/forbid-foreign-prop-types': 'error',
    // 禁止在 setState 中引用 state（传递函数代替）
    'react/no-access-state-in-setstate': 'error',
    // 禁止为 PureComponent 指定 shouldComponentUpdate
    'react/no-redundant-should-component-update': 'error',
    // 禁止在函数组件中使用 this
    'react/no-this-in-sfc': 'error',
    // 防止常见的拼写错误
    'react/no-typos': 'error',
    // 禁止使用不安全的生命周期
    'react/no-unsafe': 'error',
    // 必须按顺序声明组件选项
    'react/sort-comp': 'warn',
    // style 属性必须传递对象
    'react/style-prop-object': 'error',
    // 禁止为 HTML 空标签传递子元素
    'react/void-dom-elements-no-children': 'error',

    /** JSX */
    // 自动修复 JSX 闭合标签的位置
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    // 自动修复闭合标签的位置
    'react/jsx-closing-tag-location': 'warn',
    // 自动去除不必要的花括号传值
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    // 自动保持花括号传值换行一致
    'react/jsx-curly-newline': 'warn',
    // 自动去除属性花括号内侧空格
    'react/jsx-curly-spacing': ['warn', { when: 'never', allowMultiline: true }],
    // 自动去除属性等号两侧的空格
    'react/jsx-equals-spacing': 'warn',
    // 自动保持所有属性换行一致
    'react/jsx-first-prop-new-line': 'warn',
    // 自动修复缩进
    'react/jsx-indent': ['warn', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    // 自动去除无用的 Fragment
    'react/jsx-no-useless-fragment': 'warn',
    // 强制组件名使用 PascalCase
    'react/jsx-pascal-case': 'error',
    // 自动修复标签内的空格
    'react/jsx-tag-spacing': ['warn', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    // 自动修复多行 JSX 的换行
    'react/jsx-wrap-multilines': ['warn', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
