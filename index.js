import gitignore from 'eslint-config-flat-gitignore'
import { resolveConfigs } from './config.js'
import galaxy from './configs/galaxy.js'
import importConfig from './configs/import.js'
import javascript from './configs/javascript.js'
import react from './configs/react.js'
import stylistic from './configs/stylistic.js'
import typescript from './configs/typescript.js'
import unicorn from './configs/unicorn.js'
import vue from './configs/vue.js'
import { resolveOptions } from './options.js'

/**
 * @typedef {import('./config').ESLintConfig} ESLintConfig
 */
/**
 * @typedef {import('./options').UserOptions} UserOptions
 */

/**
 * @param {UserOptions} [userOptions]
 * @returns {Promise<ESLintConfig[]>}
 */
async function config(userOptions = {}) {
  const options = await resolveOptions(userOptions)
  if (process.env.DEBUG) {
    console.debug('[@cyansalt/eslint-config]', options)
  }
  return resolveConfigs(options, [
    gitignore(),
    javascript,
    stylistic,
    importConfig,
    unicorn,
    typescript,
    react,
    vue,
    galaxy,
  ])
}

export default config
