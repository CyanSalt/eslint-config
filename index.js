const path = require('path')
const { hasInstalledPackage } = require('./utils')

const presets = [
  path.resolve(__dirname, './base.js'),
]

if (hasInstalledPackage('typescript')) {
  presets.push(path.resolve(__dirname, './typescript/index.js'))
}

if (hasInstalledPackage('react')) {
  presets.push(path.resolve(__dirname, './react/index.js'))
}

if (hasInstalledPackage('vue')) {
  presets.push(path.resolve(__dirname, './vue/index.js'))
}

if (hasInstalledPackage('eslint-plugin-import')) {
  presets.push(path.resolve(__dirname, './import.js'))
}

if (hasInstalledPackage('eslint-plugin-unicorn')) {
  presets.push(path.resolve(__dirname, './unicorn.js'))
}

module.exports = {
  extends: presets,
}
