import reactPlugin from 'eslint-plugin-react'
import * as reactHooksPlugin from 'eslint-plugin-react-hooks'
import { defineConfig, overrides } from '../config.js'
import { GLOB_X } from '../globs.js'

export default defineConfig(options => {
  if (!options.react) return []
  return [
    ...overrides([
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
    ], {
      files: [GLOB_X],
    }),
    {
      name: '@cyansalt/react/setup',
      files: [GLOB_X],
      settings: {
        react: {
          pragma: 'React',
          version: 'detect',
        },
      },
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
        // [覆盖 recommended] 不强制声明 propTypes（可能从某些类型参数中自动推导）
        'react/prop-types': 'off',
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
        // 自动去除不必要的花括号传值，但强制为 JSX 属性添加花括号
        'react/jsx-curly-brace-presence': ['warn', {
          props: 'never',
          children: 'never',
          propElementValues: 'always',
        }],
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
        // 自动为多行 JSX 的所有属性都添加换行，且超过5个属性时自动换行
        'react/jsx-max-props-per-line': ['warn', { maximum: { single: 5, multi: 1 } }],
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
    },
    ...overrides([
      reactHooksPlugin.configs['recommended-latest'],
    ], {
      files: [GLOB_X],
    }),
  ]
})
