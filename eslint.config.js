import config from './index.js'

export default config({
  configs: [
    {
      languageOptions: {
        parserOptions: {
          extraFileExtensions: ['.vue'],
        },
      },
      rules: {
        'galaxy/import-extensions': ['warn', {
          '.js': 'always',
        }],
      },
    },
  ],
})
