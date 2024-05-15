import path from 'node:path'
import { getPackageInfo, importModule, isPackageExists } from 'local-pkg'
import semver from 'semver'

/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
/**
 * @template T
 * @typedef {import('type-fest').PartialDeep<T>} PartialDeep<T>
 */
/**
 * @typedef {import('./config').Config} Config
 */

/**
 * @typedef Options
 * @property {boolean | { mixed: boolean }} typescript
 * @property {boolean} babel
 * @property {boolean} react
 * @property {boolean | { legacy: boolean | 2.7, macros: boolean }} vue
 * @property {boolean} jsx
 * @property {(Config | FlatConfig)[]} configs
 */

/**
 * @typedef {PartialDeep<Options>} UserOptions
 */

async function getTSCompilerOptions() {
  try {
    const ts = await importModule('typescript')
    const configPath = ts.findConfigFile(process.cwd(), ts.sys.fileExists, 'tsconfig.json')
    const configFile = ts.readConfigFile(configPath, ts.sys.readFile)
    const { options } = ts.parseJsonConfigFileContent(configFile.config, ts.sys, path.dirname(configPath))
    return options
  } catch {
    return undefined
  }
}

/**
 * @returns {Promise<Options['typescript']>}
 */
export async function resolveTypescript() {
  if (isPackageExists('typescript')) {
    const compilerOptions = await getTSCompilerOptions()
    if (compilerOptions && compilerOptions.checkJs) {
      return true
    }
    return { mixed: true }
  }
  return false
}

/**
 * @returns {Promise<Options['jsx']>}
 */
export async function resolveJsx() {
  if (isPackageExists('typescript')) {
    const compilerOptions = await getTSCompilerOptions()
    if (compilerOptions && compilerOptions.jsx) {
      return true
    }
  }
  return false
}

async function hasBabelConfigFile() {
  try {
    const babel = await importModule('@babel/core')
    const config = babel.loadPartialConfig()
    return config.hasFilesystemConfig()
  } catch {
    return false
  }
}

/**
 * @returns {Promise<Options['babel']>}
 */
export async function resolveBabel() {
  return await hasBabelConfigFile()
}

/**
 * @returns {Options['react']}
 */
export function resolveReact() {
  return isPackageExists('react')
}

/**
 * @returns {Promise<Options['vue']>}
 */
export async function resolveVue() {
  if (isPackageExists('vue')) {
    const pkg = await getPackageInfo('vue')
    return {
      legacy: semver.satisfies(pkg.version, '>=3') ? false : (
        semver.satisfies(pkg.version, '>=2.7') ? 2.7 : true
      ),
      macros: isPackageExists('@vue-macros/reactivity-transform')
        || isPackageExists('unplugin-vue-macros'),
    }
  }
  return false
}

/**
 * @param {UserOptions} [options]
 * @returns {Promise<Options>}
 */
export async function resolveOptions(options = {}) {
  return {
    typescript: options.typescript ?? await resolveTypescript(),
    babel: options.babel ?? await resolveBabel(),
    react: options.react ?? resolveReact(),
    vue: options.vue ?? await resolveVue(),
    jsx: options.jsx ?? await resolveJsx(),
    configs: options.configs ?? [],
  }
}
