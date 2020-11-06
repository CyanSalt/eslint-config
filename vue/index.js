const path = require('path')
const { hasInstalledPackage } = require('../utils')

const presets = []

if (hasInstalledPackage('vue', '>=3.x')) {
  presets.push(path.resolve(__dirname, './v3.js'))
} else {
  presets.push(path.resolve(__dirname, './v2.js'))
}

if (hasInstalledPackage('eslint-plugin-vue-scoped-css')) {
  presets.push(path.resolve(__dirname, './scoped-css.js'))
}

if (hasInstalledPackage('typescript')) {
  presets.push(path.resolve(__dirname, './typescript.js'))
}

module.exports = {
  extends: presets,
}
