import galaxyPlugin from 'eslint-plugin-galaxy'
import { defineConfig } from '../config.js'

export default defineConfig(options => {
  return [
    {
      plugins: {
        galaxy: galaxyPlugin,
      },
      rules: {
        ...galaxyPlugin.configs.recommended.rules,
        // 自动移除 .ts 文件的导入后缀
        'galaxy/import-extensions': ['warn', {
          '.cts': 'never',
          '.mts': 'never',
          '.ts': 'never',
          '.tsx': 'never',
        }],
        // 自动为 if-else 结构增加花括号
        'galaxy/multi-branch-curly': 'warn',
        // 禁止 3 层及以上的解构赋值
        'galaxy/max-nested-destructuring': ['error', { max: 3 }],
        // 禁止使用 for-in 结构
        'galaxy/no-for-in': 'error',
        // 禁止可能是误用的全局变量
        'galaxy/no-misused-globals': 'error',
        // 自动为非控制语句的 if 结构增加花括号
        'galaxy/non-control-statement-curly': 'warn',
      },
    },
    ...(options.typescript ? [
      {
        rules: {
          // 禁止使用 `as any`
          'galaxy/no-as-any': 'error',
        },
      },
    ] : []),
    ...(options.vue ? [
      {
        rules: {
          ...galaxyPlugin.configs['recommended-vue'].rules,
          // 自动调整组件选项内的属性顺序
          'galaxy/conventional-vue-keys-order': ['warn', {
            rules: [
              'model',
              // 'props',
              'props-properties',
              'inject-properties',
              // 'emits',
              'data-return',
              // 'computed',
              'computed-strict',
              'watch-properties',
              // 'methods',
              'methods-strict',
            ],
          }],
          // 自动为 .vue 导入添加后缀
          'galaxy/import-extensions': ['warn', {
            '.cts': 'never',
            '.mts': 'never',
            '.ts': 'never',
            '.tsx': 'never',
            '.vue': 'always',
          }],
          // 禁止使用歧义的 props 默认值
          'galaxy/no-ambiguous-vue-default-props': 'error',
          // 自动合并重复的 store 映射
          'galaxy/no-duplicate-vue-store-mappings': 'warn',
          // 自动移除模板引号内侧的空格
          'galaxy/vue-attribute-spacing': 'warn',
        },
      },
      ...(!options.vue.legacy || options.vue.legacy === 2.7 ? [
        {
          rules: {
            // 自动替换已废弃的 ::v-deep 操作符
            'galaxy/no-deprecated-vue-deep-combinator': 'warn',
          },
        },
      ] : []),
      ...(options.vue.macros ? [
        {
          rules: {
            // 自动修复错误的 props 定义
            'galaxy/valid-vue-reactivity-transform-props': 'warn',
            // 将 Reactivity Transform 的副作用变量标记为已使用
            'galaxy/vue-reactivity-transform-uses-vars': 'error',
            // 禁止混用 Ref 定义和 Reactivity Transform
            'galaxy/vue-ref-style': 'error',
          },
        },
      ] : []),
    ] : []),
  ]
})
