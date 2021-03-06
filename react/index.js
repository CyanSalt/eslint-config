const path = require('path')
const { hasInstalledPackage } = require('../utils')

const presets = [
  path.resolve(__dirname, './base.js'),
]

if (hasInstalledPackage('eslint-plugin-react-hooks', '>=3.0.0')) {
  presets.push(path.resolve(__dirname, './hooks.js'))
}

module.exports = {
  extends: presets,
}
