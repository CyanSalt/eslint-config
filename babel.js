const config = require('./base.js')

module.exports = {
  plugins: [
    'babel',
  ],
  rules: {
    // 禁止使用某些表达式代替对应语句
    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': config.rules['no-unused-expressions'],
    // 自动为对象字面量、解构和导入的花括号内侧添加空格
    'object-curly-spacing': 'off',
    '@babel/object-curly-spacing': config.rules['object-curly-spacing'],
    // 自动在语句结尾添加分号
    semi: 'off',
    '@babel/semi': config.rules['semi'],
  },
}
