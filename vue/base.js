const config = require('../index.js')

module.exports = {
  rules: {
    /** Strongly Recommended */
    'vue/attribute-hyphenation': 'error',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-closing-bracket-spacing': ['error', { selfClosingTag: 'always' }],
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['warn', 2, { alignAttributesVertically: false }],
    'vue/html-quotes': ['warn', 'double'],
    'vue/max-attributes-per-line': ['warn', { singleline: 5, multiline: { max: 1 } }],
    'vue/mustache-interpolation-spacing': ['warn', 'always'],
    // Deprecated in eslint-plugin-vue@7
    'vue/name-property-casing': ['warn', 'PascalCase'],
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
    'vue/order-in-components': 'warn',
    'vue/this-in-template': 'error',

    /** Uncategorized */
    'vue/component-name-in-template-casing': ['warn', 'PascalCase', { registeredComponentsOnly: true }],
    'vue/match-component-file-name': ['error', { extensions: ['vue'], shouldMatchCase: true }],
    // New options supported in eslint-plugin-vue@7
    'vue/no-reserved-component-names': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/padding-line-between-blocks': 'warn',

    /** Extension Rules */
    'vue/array-bracket-spacing': config.rules['array-bracket-spacing'],
    'vue/arrow-spacing': config.rules['arrow-spacing'],
    'vue/brace-style': config.rules['brace-style'],
    'vue/camelcase': config.rules['camelcase'],
    'vue/comma-dangle': config.rules['comma-dangle'],
    'vue/dot-location': config.rules['dot-location'],
    'vue/eqeqeq': config.rules['eqeqeq'],
    'vue/key-spacing': config.rules['key-spacing'],
    'vue/keyword-spacing': config.rules['keyword-spacing'],
    // ESLint recommended
    'vue/no-empty-pattern': 'error',
    // ESLint recommended
    'vue/no-irregular-whitespace': 'error',
    'vue/object-curly-spacing': config.rules['object-curly-spacing'],
    'vue/space-infix-ops': config.rules['space-infix-ops'],
    'vue/space-unary-ops': config.rules['space-unary-ops'],
  },
}
