import config from './index.js'

export default config({
  configs: [
    {
      rules: {
        'galaxy/import-extensions': ['warn', {
          '.js': 'always',
        }],
      },
    },
  ],
})
