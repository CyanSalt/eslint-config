const semver = require('semver')

function hasInstalledPackage(moduleId, version) {
  let packageJson
  try {
    packageJson = require(`${moduleId}/package.json`)
  } catch {
    return false
  }
  if (version) {
    return semver.satisfies(packageJson.version, version)
  }
  return true
}

module.exports = {
  hasInstalledPackage,
}
