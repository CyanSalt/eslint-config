const config = require('../index.js')
const stylisticJsConfig = require('../stylistic.js')
const groups = require('./order-groups')

module.exports = {
  parserOptions: {
    ecmaVersion: config.parserOptions.ecmaVersion,
  },
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
    'vue/component-tags-order': ['warn', {
      order: [['script[setup]', 'template'], 'script', 'style:not([scoped])', 'style[scoped]'],
    }],
    // 禁止无意义的 template 元素
    'vue/no-lone-template': 'error',
    // 禁止为 slots/scopedSlot 传递多个参数
    'vue/no-multiple-slot-args': 'error',
    // 自动优化 Vue 组件内声明的顺序
    'vue/order-in-components': ['warn', {
      order: [
        ...groups.sideEffects,
        ...groups.globalAwareness,
        ...groups.componentType,
        ...groups.templateModifiers,
        ...groups.templateDependencies,
        ...groups.composition,
        ...groups.pageOptions,
        ...groups.interfaces,
        ...groups.localState,
        ...groups.events,
        ...groups.nonReactiveProperties,
        ...groups.rendering,
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
    // 禁止未使用的属性，但不检查 props
    'vue/no-unused-properties': ['error', {
      groups: ['data', 'computed', 'methods', 'setup'],
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
    'vue/array-bracket-newline': stylisticJsConfig.rules['@stylistic/js/array-bracket-newline'],
    // 自动删除数组的括号内侧的空格
    'vue/array-bracket-spacing': stylisticJsConfig.rules['@stylistic/js/array-bracket-spacing'],
    // 自动优化数组的元素换行（所有元素保持一致）
    'vue/array-element-newline': stylisticJsConfig.rules['@stylistic/js/array-element-newline'],
    // 自动在箭头函数的箭头前后添加空格
    'vue/arrow-spacing': stylisticJsConfig.rules['@stylistic/js/arrow-spacing'],
    // 自动优化花括号为 one true 风格（左侧花括号前不换行，else 前也不换行）
    'vue/brace-style': stylisticJsConfig.rules['@stylistic/js/brace-style'],
    // 自动添加尾随逗号
    'vue/comma-dangle': stylisticJsConfig.rules['@stylistic/js/comma-dangle'],
    // 自动优化逗号的空格使用（逗号前禁止使用空格，逗号后必须使用空格）
    'vue/comma-spacing': stylisticJsConfig.rules['@stylistic/js/comma-spacing'],
    // 自动移动行首的逗号至行尾
    'vue/comma-style': stylisticJsConfig.rules['@stylistic/js/comma-style'],
    // 点号如果换行需要写在行首而非行尾
    'vue/dot-location': stylisticJsConfig.rules['@stylistic/js/dot-location'],
    // 禁止使用 == 隐式类型转换
    'vue/eqeqeq': config.rules['eqeqeq'],
    // 自动删除函数调用的括号前的空格
    'vue/func-call-spacing': stylisticJsConfig.rules['@stylistic/js/func-call-spacing'],
    // 自动优化对象字面量冒号的空格使用（冒号前禁止使用空格，冒号后必须使用空格）
    'vue/key-spacing': stylisticJsConfig.rules['@stylistic/js/key-spacing'],
    // 自动在关键字前后添加空格
    'vue/keyword-spacing': stylisticJsConfig.rules['@stylistic/js/keyword-spacing'],
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
    'vue/no-useless-concat': config.rules['no-useless-concat'],
    // 自动优化对象字面量、解构和导入的花括号换行（前括号和后括号保持一致）
    'vue/object-curly-newline': stylisticJsConfig.rules['@stylistic/js/object-curly-newline'],
    // 自动为对象字面量、解构和导入的花括号内侧添加空格
    'vue/object-curly-spacing': stylisticJsConfig.rules['@stylistic/js/object-curly-spacing'],
    // 自动优化对象字面量的值为简写
    'vue/object-shorthand': config.rules['object-shorthand'],
    // 自动优化行尾操作符至下一行行首
    'vue/operator-linebreak': stylisticJsConfig.rules['@stylistic/js/operator-linebreak'],
    // 自动删除不必要的对象字面量键的引号
    'vue/quote-props': stylisticJsConfig.rules['@stylistic/js/quote-props'],
    // 自动删除括号内侧的空格
    'vue/space-in-parens': stylisticJsConfig.rules['@stylistic/js/space-in-parens'],
    // 自动在多元操作符前后添加空格
    'vue/space-infix-ops': stylisticJsConfig.rules['@stylistic/js/space-infix-ops'],
    // 自动删除一元操作符的空格，自动为一元关键字添加空格
    'vue/space-unary-ops': stylisticJsConfig.rules['@stylistic/js/space-unary-ops'],
    // 自动删除模板字符串的插值花括号内侧空格
    'vue/template-curly-spacing': stylisticJsConfig.rules['@stylistic/js/template-curly-spacing'],
  },
  overrides: [
    {
      files: ['**/*.vue'],
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
  ],
}
