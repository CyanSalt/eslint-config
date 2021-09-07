const path = require('path')
const { hasInstalledPackage } = require('./utils')

const presets = [
  path.resolve(__dirname, './base.js'),
]

if (hasInstalledPackage('@typescript-eslint/eslint-plugin')) {
  presets.push(path.resolve(__dirname, './typescript/index.js'))
}

if (hasInstalledPackage('eslint-plugin-react')) {
  presets.push(path.resolve(__dirname, './react/index.js'))
}

if (hasInstalledPackage('eslint-plugin-vue')) {
  presets.push(path.resolve(__dirname, './vue/index.js'))
}

if (hasInstalledPackage('eslint-plugin-import')) {
  presets.push(path.resolve(__dirname, './import.js'))
}

if (hasInstalledPackage('eslint-plugin-unicorn')) {
  presets.push(path.resolve(__dirname, './unicorn.js'))
}

if (hasInstalledPackage('eslint-plugin-galaxy')) {
  presets.push(path.resolve(__dirname, './galaxy/index.js'))
}

if (hasInstalledPackage('@babel/eslint-plugin')) {
  presets.push(path.resolve(__dirname, './babel.js'))
}

module.exports = {
  extends: presets,
}
