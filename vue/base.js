const config = require('../base.js')

module.exports = {
  rules: {
    /** Essential */
    'vue/custom-event-name-casing': ['error', { ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'] }],

    /** Strongly Recommended */
    'vue/attribute-hyphenation': 'error',
    'vue/component-definition-name-casing': ['warn', 'kebab-case'],
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-closing-bracket-spacing': ['error', { selfClosingTag: 'always' }],
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['warn', 2, { alignAttributesVertically: false }],
    'vue/html-quotes': ['warn', 'double'],
    'vue/max-attributes-per-line': ['warn', { singleline: 5, multiline: { max: 1 } }],
    'vue/mustache-interpolation-spacing': ['warn', 'always'],
    'vue/no-multi-spaces': 'warn',
    'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
    'vue/no-template-shadow': 'error',
    'vue/require-prop-types': 'error',
    'vue/v-bind-style': 'warn',
    'vue/v-on-style': 'warn',
    'vue/v-slot-style': 'error',

    /** Recommended */
    'vue/attributes-order': 'warn',
    'vue/component-tags-order': ['warn', {
      order: ['template', 'script', 'style'],
    }],
    'vue/no-lone-template': 'error',
    'vue/no-multiple-slot-args': 'error',
    'vue/order-in-components': 'warn',
    'vue/this-in-template': 'error',

    /** Uncategorized */
    'vue/component-name-in-template-casing': ['warn', 'kebab-case', { registeredComponentsOnly: true }],
    'vue/match-component-file-name': ['error', { extensions: ['vue'] }],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-invalid-model-keys': 'error',
    'vue/no-reserved-component-names': ['error', {
      disallowVueBuiltInComponents: true,
      disallowVue3BuiltInComponents: true,
    }],
    'vue/no-static-inline-styles': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-unused-properties': ['error', {
      groups: ['data', 'computed', 'methods', 'setup'],
      ignorePublicMembers: true,
    }],
    'vue/no-useless-mustaches': 'warn',
    'vue/no-useless-v-bind': 'warn',
    'vue/padding-line-between-blocks': 'warn',
    'vue/v-for-delimiter-style': 'warn',
    'vue/valid-next-tick': 'warn',

    /** Extension Rules */
    'vue/array-bracket-spacing': config.rules['array-bracket-spacing'],
    'vue/arrow-spacing': config.rules['arrow-spacing'],
    'vue/brace-style': config.rules['brace-style'],
    'vue/camelcase': config.rules['camelcase'],
    'vue/comma-dangle': config.rules['comma-dangle'],
    'vue/dot-location': config.rules['dot-location'],
    'vue/eqeqeq': config.rules['eqeqeq'],
    'vue/func-call-spacing': config.rules['func-call-spacing'],
    'vue/key-spacing': config.rules['key-spacing'],
    'vue/keyword-spacing': config.rules['keyword-spacing'],
    // ESLint recommended
    'vue/no-constant-condition': 'error',
    // ESLint recommended
    'vue/no-empty-pattern': 'error',
    // ESLint recommended
    'vue/no-irregular-whitespace': 'error',
    // ESLint recommended
    'vue/no-sparse-arrays': 'error',
    'vue/no-useless-concat': config.rules['no-useless-concat'],
    'vue/object-curly-newline': config.rules['object-curly-newline'],
    'vue/object-curly-spacing': config.rules['object-curly-spacing'],
    'vue/operator-linebreak': config.rules['operator-linebreak'],
    'vue/space-in-parens': config.rules['space-in-parens'],
    'vue/space-infix-ops': config.rules['space-infix-ops'],
    'vue/space-unary-ops': config.rules['space-unary-ops'],
    'vue/template-curly-spacing': config.rules['template-curly-spacing'],
  },
  overrides: [
    {
      files: ['**/index.vue'],
      rules: {
        'vue/match-component-file-name': 'off',
      },
    },
  ],
}
