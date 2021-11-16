const path = require('path')
const { hasInstalledPackage } = require('../utils')

const presets = []

if (hasInstalledPackage('vue', '>=3.x')) {
  presets.push(path.resolve(__dirname, './v3.js'))
} else {
  presets.push(path.resolve(__dirname, './v2.js'))
}

module.exports = {
  extends: presets,
}
