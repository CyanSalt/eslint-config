const path = require('path')
const { hasInstalledPackage } = require('../utils')

const presets = [
  path.resolve(__dirname, './base.js'),
]

if (hasInstalledPackage('eslint-plugin-vue')) {
  presets.push(path.resolve(__dirname, './vue.js'))
}

module.exports = {
  extends: presets,
}
