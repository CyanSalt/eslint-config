const config = require('../index.js')
const stylisticJsConfig = require('../stylistic.js')

module.exports = {
  parser: '@babel/eslint-parser',
  plugins: [
    '@babel',
  ],
  rules: {
    // 禁止使用未定义的变量
    'no-undef': 'off',
    '@babel/no-undef': 'error',
    // 禁止使用某些表达式代替对应语句
    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': config.rules['no-unused-expressions'],
    // 自动为对象字面量、解构和导入的花括号内侧添加空格
    '@stylistic/js/object-curly-spacing': 'off',
    '@babel/object-curly-spacing': stylisticJsConfig.rules['@stylistic/js/object-curly-spacing'],
    // 自动移除语句结尾的分号
    '@stylistic/js/semi': 'off',
    '@babel/semi': stylisticJsConfig.rules['@stylistic/js/semi'],
  },
}
