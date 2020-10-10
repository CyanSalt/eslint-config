const config = require('../index.js')

module.exports = {
  rules: {
    /** Strongly Recommended */
    'vue/component-definition-name-casing': ['warn', 'PascalCase'],
    'vue/no-multiple-slot-args': 'error',

    /** Recommended */
    'vue/no-lone-template': 'error',

    /** Uncategorized */
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-reserved-component-names': ['error', {
      disallowVueBuiltInComponents: true,
      disallowVue3BuiltInComponents: true,
    }],
    'vue/no-template-target-blank': 'error',
    'vue/no-useless-mustaches': 'warn',
    'vue/no-useless-v-bind': 'warn',
    'vue/v-for-delimiter-style': 'warn',

    /** Extension Rules */
    'vue/func-call-spacing': config.rules['func-call-spacing'],
    // ESLint recommended
    'vue/no-sparse-arrays': 'error',
    'vue/no-useless-concat': config.rules['no-useless-concat'],
    'vue/object-curly-newline': config.rules['object-curly-newline'],
    'vue/operator-linebreak': config.rules['operator-linebreak'],
    'vue/space-in-parens': config.rules['space-in-parens'],
    'vue/template-curly-spacing': config.rules['template-curly-spacing'],

    /** Deprecated */
    'vue/name-property-casing': 'off',
  },
}
