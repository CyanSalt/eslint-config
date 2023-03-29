const config = require('../index.js')

module.exports = {
  parser: '@babel/eslint-parser',
  plugins: [
    '@babel',
  ],
  rules: {
    // 禁止使用某些表达式代替对应语句
    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': config.rules['no-unused-expressions'],
  },
}
