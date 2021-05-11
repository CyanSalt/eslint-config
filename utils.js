const semver = require('semver')

function getEnvironmentPackageVersion(moduleId) {
  const packages = (process.env.NODE_MODULES ?? '').split(':')
  const prefix = `${moduleId}@`
  const declaration = packages.find(item => item.startsWith(prefix))
  return declaration ? declaration.slice(prefix.length) : null
}

function getInstalledPackageVersion(moduleId) {
  const envVersion = getEnvironmentPackageVersion(moduleId)
  // Allow empty strings
  if (envVersion !== null) return envVersion
  let packageJson
  try {
    packageJson = require(`${moduleId}/package.json`)
  } catch {
    return null
  }
  return packageJson.version
}

function hasInstalledPackage(moduleId, version) {
  const installedVersion = getInstalledPackageVersion(moduleId)
  if (!installedVersion) {
    return false
  }
  if (version) {
    return semver.satisfies(installedVersion, version)
  }
  return true
}

module.exports = {
  getInstalledPackageVersion,
  hasInstalledPackage,
}
