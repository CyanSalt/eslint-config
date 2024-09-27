import { createRequire } from 'node:module'
import vuePlugin from 'eslint-plugin-vue'
import vueScopedCssPlugin from 'eslint-plugin-vue-scoped-css'
import { defineConfig, overrides } from '../config.js'
import { GLOB_VUE } from '../globs.js'

/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
/**
 * @typedef {import('../options').Options} Options
 */

const orders = {
  // Side Effects (triggers effects outside the component)
  sideEffects: [
    'el',
  ],
  // Global Awareness (requires knowledge beyond the component)
  globalAwareness: [
    'name',
    'key', // for Nuxt
    'parent',
    'compatConfig', // for @vue/compat
  ],
  // Component Type (changes the type of the component)
  componentType: [
    'functional',
  ],
  // Template Modifiers (changes the way templates are compiled)
  templateModifiers: [
    ['compilerOptions', 'delimiters', 'comments'],
  ],
  // Template Dependencies (assets used in the template)
  templateDependencies: [
    ['components', 'directives', 'filters'],
  ],
  // Composition (merges properties into the options)
  composition: [
    'extends',
    'mixins',
    [
      'provide',
      'inject',
    ],
  ],
  // Page Options (component rendered as a router page)
  pageOptions: [
    'ROUTER_GUARDS', // for Vue Router
    'layout', // for Nuxt
    'middleware', // for Nuxt
    'validate', // for Nuxt
    'scrollToTop', // for Nuxt
    'transition', // for Nuxt
    'loading', // for Nuxt
  ],
  // Interface (the interface to the component)
  interfaces: [
    'inheritAttrs',
    'model',
    ['props', 'propsData'],
    'emits',
    'slots',
    'expose',
    // Note:
    // The `setup` option is included in the "Composition" category,
    // but the behavior of the `setup` option requires the definition of "Interface",
    // so we prefer to put the `setup` option after the "Interface".
    'setup',
  ],
  // Local State (local reactive properties)
  localState: [
    'asyncData', // for Nuxt
    'data',
    'fetch', // for Nuxt
    'head', // for Nuxt
    'subscriptions', // for vue-rx
    'apollo', // for vue-apollo
    'computed',
  ],
  // Events (callbacks triggered by reactive events)
  events: [
    'watch',
    'watchQuery', // for Nuxt
    'LIFECYCLE_HOOKS',
  ],
  // // Non-Reactive Properties (instance properties independent of the reactivity system)
  nonReactiveProperties: [
    'methods',
    'observableMethods', // for vue-rx
  ],
  // Rendering (the declarative description of the component output)
  rendering: [
    ['template', 'render'],
    'renderError',
  ],
}

export default defineConfig(options => {
  if (!options.vue) return []
  const { resolve } = createRequire(import.meta.url)
  const mixed = options.typescript && options.typescript.mixed || options.jsx
  return [
    ...(options.vue.legacy ? vuePlugin.configs['flat/vue2-essential'] : vuePlugin.configs['flat/essential']),
    ...(options.typescript ? (mixed ? [
      {
        files: [GLOB_VUE],
        languageOptions: {
          parserOptions: {
            parser: {
              cts: resolve('@typescript-eslint/parser'),
              mts: resolve('@typescript-eslint/parser'),
              ts: resolve('@typescript-eslint/parser'),
              tsx: resolve('@typescript-eslint/parser'),
              ...(options.babel ? {
                js: resolve('@babel/eslint-parser'),
                jsx: resolve('@babel/eslint-parser'),
              } : {}),
            },
          },
        },
      },
      ...(options.jsx ? [
        {
          files: [GLOB_VUE],
          languageOptions: {
            parserOptions: {
              project: null,
            },
          },
        },
      ] : []),
    ] : [
      {
        languageOptions: {
          parserOptions: {
            extraFileExtensions: ['.vue'],
          },
        },
      },
      {
        files: [GLOB_VUE],
        languageOptions: {
          parserOptions: {
            parser: resolve('@typescript-eslint/parser'),
          },
        },
      },
    ]) : (options.babel ? [
      {
        files: [GLOB_VUE],
        languageOptions: {
          parserOptions: {
            parser: resolve('@babel/eslint-parser'),
          },
        },
      },
    ] : [])),
    {
      rules: {
        /** Essential */
        // 允许单个单词的组件名
        'vue/multi-word-component-names': 'off',
        // 禁止为将被替换内容的元素指定内容
        'vue/no-child-content': ['error', { additionalDirectives: ['t', 'safe-html'] }],
        // 禁止将组件名称指定为保留的组件名（例如 div）
        'vue/no-reserved-component-names': ['error', {
          disallowVueBuiltInComponents: true,
          disallowVue3BuiltInComponents: true,
        }],

        /** Essential (Vue 2) */
        // model 选项的属性只能包含 prop 和 event
        'vue/valid-model-definition': 'error',
        // 使用 v-bind.sync 必须绑定合法的左值
        'vue/valid-v-bind-sync': 'error',

        /** Essential (Vue 3) */
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
        // 禁止使用已废弃的 v-is
        'vue/no-deprecated-v-is': 'error',
        // 自动将 keyCode 事件修饰符转化为 key
        'vue/no-deprecated-v-on-number-modifiers': 'warn',
        // 禁止使用 Vue.config.keyCodes
        'vue/no-deprecated-vue-config-keycodes': 'error',
        // [Composition API] 禁止在 setup 的 await 后使用 expose
        'vue/no-expose-after-await': 'error',
        // [Composition API] 禁止在 setup 的 await 后使用生命周期钩子
        'vue/no-lifecycle-after-await': 'error',
        // [Composition API] 禁止在 setup 的 await 后使用 watch
        'vue/no-watch-after-await': 'error',
        // 禁止对静态条件包裹 <transition> 组件
        'vue/require-toggle-inside-transition': 'error',
        // 必须使用合法的 v-is
        'vue/valid-v-is': 'error',
        // 必须使用合法的 v-memo
        'vue/valid-v-memo': 'error',

        /** Strongly Recommended */
        // 自动将 HTML 中的属性名修改为 kebab-case
        'vue/attribute-hyphenation': 'warn',
        // 自动为多行属性的首个属性换行
        'vue/first-attribute-linebreak': 'warn',
        // 自动将多行标签的右尖括号换行
        'vue/html-closing-bracket-newline': 'warn',
        // 自动为自闭合标签的结尾加空格
        'vue/html-closing-bracket-spacing': 'warn',
        // 自动添加闭合标签，HTML 空标签（<br>、<img> 等）除外
        'vue/html-end-tags': 'warn',
        // 自动修复 HTML 中的缩进
        'vue/html-indent': ['warn', 2, { alignAttributesVertically: false }],
        // 自动替换 HTML 属性值的引号为双引号
        'vue/html-quotes': 'warn',
        // 自动将普通 HTML 的自闭合标签替换为闭合标签
        'vue/html-self-closing': ['warn', {
          html: { void: 'never', normal: 'never', component: 'any' },
        }],
        // 自动为多行标签的所有属性都添加换行，且超过5个属性时自动换行
        'vue/max-attributes-per-line': ['warn', { singleline: 5, multiline: 1 }],
        // 自动修复插值的花括号内侧保留一个空格
        'vue/mustache-interpolation-spacing': 'warn',
        // 自动删除连续的多个空格
        'vue/no-multi-spaces': 'warn',
        // 自动删除属性等号两侧的空格
        'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
        // 禁止模板指令（v-for、v-slot）产生的变量覆盖外部的变量
        'vue/no-template-shadow': 'error',
        // 组件的属性必须使用 camelCase
        'vue/prop-name-casing': 'error',
        // 组件的属性必须声明类型
        'vue/require-prop-types': 'error',
        // 自动优化单个属性的 v-bind 为简写
        'vue/v-bind-style': 'warn',
        // 自动优化单个属性的 v-on 为简写
        'vue/v-on-style': 'warn',
        // 在组件上自动替换为 v-slot，在 <template> 上自动替换为 #name 缩写
        'vue/v-slot-style': 'warn',

        /** Recommended */
        // 自动优化 HTML 属性的顺序
        'vue/attributes-order': 'warn',
        // 自动优化单文件组件的标签顺序
        'vue/component-tags-order': 'off',
        'vue/block-order': ['warn', {
          order: ['script[setup]', 'script[setup] ~ script', 'template', 'script', 'style:not([scoped])', 'style[scoped]'],
        }],
        // 禁止无意义的 template 元素
        'vue/no-lone-template': 'error',
        // 禁止为 slots/scopedSlot 传递多个参数
        'vue/no-multiple-slot-args': 'error',
        // 自动优化 Vue 组件内声明的顺序
        'vue/order-in-components': ['warn', {
          order: [
            ...orders.sideEffects,
            ...orders.globalAwareness,
            ...orders.componentType,
            ...orders.templateModifiers,
            ...orders.templateDependencies,
            ...orders.composition,
            ...orders.pageOptions,
            ...orders.interfaces,
            ...orders.localState,
            ...orders.events,
            ...orders.nonReactiveProperties,
            ...orders.rendering,
          ],
        }],
        // 禁止在模板中使用 this
        'vue/this-in-template': 'error',

        /** Uncategorized */
        // 自动修复块标签的换行（单行块保持换行一致，多行块强制前后换行）
        'vue/block-tag-newline': 'warn',
        // 自动修改组件内注册的组件名称为 PascalCase
        'vue/component-name-in-template-casing': ['warn', 'PascalCase', { registeredComponentsOnly: true }],
        // 事件名必须使用 kebab-case，但允许以 : 分隔
        'vue/custom-event-name-casing': ['error', 'kebab-case', { ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'] }],
        // 在 <script lang="ts" setup> 下必须使用类型声明 defineEmits
        'vue/define-emits-declaration': 'error',
        // 在 <script lang="ts" setup> 下必须使用类型声明 defineProps
        'vue/define-props-declaration': 'error',
        // 自动为 HTML 注释内侧插入空格
        'vue/html-comment-content-spacing': 'warn',
        // 组件的 name 必须与文件名匹配
        'vue/match-component-file-name': ['error', { extensions: ['vue'], shouldMatchCase: true }],
        // 使用 v-bind="$attrs" 时必须指定 inheritAttrs: false
        'vue/no-duplicate-attr-inheritance': 'error',
        // 禁止单文件组件内的空标签
        'vue/no-empty-component-block': 'error',
        // 禁止无标记的 ref 副作用
        'vue/no-ref-object-reactivity-loss': 'error',
        // 自动去除具有默认值的 props 的 required 标识
        'vue/no-required-prop-with-default': ['warn', { autofix: true }],
        // 禁止绑定 v- 开头的属性
        'vue/no-restricted-v-bind': 'error',
        // 禁止传递不变的内联样式
        'vue/no-static-inline-styles': 'error',
        // 必须为 target="_blank" 的连接声明 rel="noopener noreferrer"
        'vue/no-template-target-blank': 'error',
        // 禁止在 beforeRouteEnter 中使用 this
        'vue/no-this-in-before-route-enter': 'error',
        // 未使用的属性必须使用 /** @public */ 标记，但不检查 props
        'vue/no-unused-properties': ['error', {
          groups: ['data', 'computed', 'methods', 'setup'],
          ignorePublicMembers: true,
        }],
        // 禁止未使用的 ref
        'vue/no-unused-refs': 'error',
        // 自动去除不必要的 Mustache 插值
        'vue/no-useless-mustaches': 'warn',
        // 自动去除不必要的 v-bind 绑定
        'vue/no-useless-v-bind': 'warn',
        // 自动在单文件组件的根元素之间加入换行
        'vue/padding-line-between-blocks': 'warn',
        // 自动将 prop 类型中的 Boolean 排列在第一个
        'vue/prefer-prop-type-boolean-first': 'warn',
        // 必须为 emits 声明校验函数
        'vue/require-emit-validator': 'error',
        // 自动将 v-for 中的 of 替换为 in 以保持一致
        'vue/v-for-delimiter-style': 'warn',
        // 必须使用合法的 defineOptions
        'vue/valid-define-options': 'error',

        /** Extension Rules */
        // 自动优化数组的两侧括号换行（前括号和后括号保持一致）
        'vue/array-bracket-newline': ['warn', 'consistent'],
        // 自动删除数组的括号内侧的空格
        'vue/array-bracket-spacing': 'warn',
        // 自动优化数组的元素换行（所有元素保持一致）
        'vue/array-element-newline': ['warn', 'consistent'],
        // 自动在箭头函数的箭头前后添加空格
        'vue/arrow-spacing': 'warn',
        // 自动优化花括号为 one true 风格（左侧花括号前不换行，else 前也不换行）
        'vue/brace-style': 'warn',
        // 自动添加尾随逗号
        'vue/comma-dangle': ['warn', 'always-multiline'],
        // 自动优化逗号的空格使用（逗号前禁止使用空格，逗号后必须使用空格）
        'vue/comma-spacing': 'warn',
        // 自动移动行首的逗号至行尾
        'vue/comma-style': 'warn',
        // 点号如果换行需要写在行首而非行尾
        'vue/dot-location': ['error', 'property'],
        // 禁止使用 == 隐式类型转换
        'vue/eqeqeq': ['error', 'always'],
        // 自动删除函数调用的括号前的空格
        'vue/func-call-spacing': 'warn',
        // 自动优化对象字面量冒号的空格使用（冒号前禁止使用空格，冒号后必须使用空格）
        'vue/key-spacing': ['warn', { beforeColon: false, afterColon: true, mode: 'strict' }],
        // 自动在关键字前后添加空格
        'vue/keyword-spacing': ['warn', { before: true, after: true }],
        // [扩展 recommended] 禁止使用不可变的 if 条件
        'vue/no-constant-condition': 'error',
        // [扩展 recommended] 禁止使用空的解构
        'vue/no-empty-pattern': 'error',
        // [扩展 recommended] 禁止使用非标准空白符
        'vue/no-irregular-whitespace': 'error',
        // [扩展 recommended] 禁止使用 JS 不支持的数字精度
        'vue/no-loss-of-precision': 'error',
        // [扩展 recommended] 禁止使用稀疏数组
        'vue/no-sparse-arrays': 'error',
        // 禁止单行内的字符串字面量拼接
        'vue/no-useless-concat': 'error',
        // 自动优化对象字面量、解构和导入的花括号换行（前括号和后括号保持一致）
        'vue/object-curly-newline': ['warn', { consistent: true }],
        // 自动为对象字面量、解构和导入的花括号内侧添加空格
        'vue/object-curly-spacing': ['warn', 'always'],
        // 自动优化对象字面量的值为简写
        'vue/object-shorthand': ['warn', 'always'],
        // 自动优化行尾操作符至下一行行首
        'vue/operator-linebreak': ['warn', 'before'],
        // 自动删除不必要的对象字面量键的引号
        'vue/quote-props': ['warn', 'as-needed'],
        // 自动删除括号内侧的空格
        'vue/space-in-parens': 'warn',
        // 自动在多元操作符前后添加空格
        'vue/space-infix-ops': 'warn',
        // 自动删除一元操作符的空格，自动为一元关键字添加空格
        'vue/space-unary-ops': ['warn', { words: true, nonwords: false }],
        // 自动删除模板字符串的插值花括号内侧空格
        'vue/template-curly-spacing': 'warn',
      },
    },
    {
      files: [GLOB_VUE],
      rules: {
        // 禁止单行超过 120 个字符，但忽略样式块以及元素的 text content
        '@stylistic/js/max-len': 'off',
        'vue/max-len': ['error', {
          code: 120,
          ignorePattern: '\\sd="[^"]+"',
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreHTMLTextContents: true,
        }],
      },
    },
    {
      files: ['**/index.vue'],
      rules: {
        // 当使用 index.vue 命名文件时，不检查组件的 name
        'vue/match-component-file-name': 'off',
      },
    },
    ...vueScopedCssPlugin.configs['flat/vue2-recommended'],
    {
      rules: {
        // [覆盖 recommended] 允许使用非 scoped 和 module 的 style 块
        'vue-scoped-css/enforce-style-type': 'off',
        // [覆盖 recommended] 允许使用未出现过的选择器
        'vue-scoped-css/no-unused-selector': 'off',
      },
    },
    ...(options.vue.macros ? [
      {
        languageOptions: {
          globals: {
            $: 'readonly',
            $$: 'readonly',
            $ref: 'readonly',
            $shallowRef: 'readonly',
            $computed: 'readonly',
            $customRef: 'readonly',
            $toRef: 'readonly',
          },
        },
        rules: {
          // [覆盖 essential] 允许 defineProps 解构
          'vue/no-setup-props-reactivity-loss': 'off',
        },
      },
    ] : []),
    ...customize(options),
  ]
})

/**
 * @param {Options} options
 * @param {Partial<FlatConfig>} [patch]
 */
export function customize(options, patch) {
  if (!options.vue) return []

  const ruleGroups = [
    [options.vue.legacy, {
      /** Essential */
      // 禁止在 v-model 添加非内置修饰符
      'vue/no-custom-modifiers-on-v-model': 'error',
      // 禁止多个模板根元素
      'vue/no-multiple-template-root': 'error',
      // 禁止定义 ref 等保留属性
      'vue/no-reserved-props': ['error', { vueVersion: 2 }],
      // 禁止在 <template v-for> 上绑定 key
      'vue/no-v-for-template-key': 'error',
      // 禁止向 v-model 传递指令参数
      'vue/no-v-model-argument': 'error',
    }],
    [options.vue.legacy && options.vue.legacy !== 2.7, {
      // No rules here
    }],
    [options.vue.legacy === 2.7, {
      /** Essential (Vue 3) */
      // 自动将 @vue/* 的导入替换为 vue
      'vue/prefer-import-from-vue': 'warn',
    }],
    [!options.vue.legacy, {
      /** Essential */
      // 自动将 beforeDestroy/destroyed 生命周期替换为 beforeUnmount/unmounted
      'vue/no-deprecated-destroyed-lifecycle': 'warn',
      // 禁止使用 $listeners
      'vue/no-deprecated-dollar-listeners-api': 'error',
      // 自动将 $scopedSlots 替换为 $slots
      'vue/no-deprecated-dollar-scopedslots-api': 'warn',
      // 禁止使用 $on/$once/$off
      'vue/no-deprecated-events-api': 'error',
      // 禁止使用过滤器
      'vue/no-deprecated-filter': 'error',
      // 禁止使用 <template functional> 属性
      'vue/no-deprecated-functional-template': 'error',
      // 必须使用 <router-link> 的插槽而不是 tag 属性
      'vue/no-deprecated-router-link-tag-prop': 'error',
      // 禁止使用 .sync 绑定修饰符
      'vue/no-deprecated-v-bind-sync': 'error',
      // 禁止使用 .native 事件修饰符
      'vue/no-deprecated-v-on-native-modifier': 'error',
      // 禁止定义 ref 等保留属性
      'vue/no-reserved-props': 'error',
      // 必须将 key 绑定在 v-for 元素上
      'vue/no-v-for-template-key-on-child': 'error',
      // 自动将 @vue/* 的导入替换为 vue
      'vue/prefer-import-from-vue': 'warn',
      // 必须将 $slots 作为函数使用
      'vue/require-slots-as-functions': 'error',
    }],
  ]

  const enabledRules = ruleGroups.reduce(
    (rules, [enabled, current]) => ({ ...rules, ...(enabled ? current : {}) }),
    {},
  )
  const disabledRules = ruleGroups.reduce(
    (rules, [enabled, current]) => ({ ...rules, ...(enabled ? {} : current) }),
    {},
  )
  return overrides([
    {
      rules: {
        ...Object.fromEntries(Object.keys(disabledRules).map(key => [key, 'off'])),
        ...enabledRules,
      },
    },
  ], patch)
}
