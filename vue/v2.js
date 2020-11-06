const path = require('path')

module.exports = {
  extends: [
    'plugin:vue/essential',
    path.resolve(__dirname, './base.js'),
  ],
}
