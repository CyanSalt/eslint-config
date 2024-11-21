import { concat } from 'eslint-flat-config-utils'

/**
 * @typedef {import('eslint').Linter.Config} ESLintConfig
 */
/**
 * @template T
 * @typedef {import('type-fest').Promisable<T>} Promisable<T>
 */
/**
 * @typedef {import('./options').Options} Options
 */

/**
 * @typedef {(options: Options) => Promisable<ESLintConfig | ESLintConfig[]>} Config
 */

/**
 * @template {(options: Options) => Promisable<ESLintConfig | ESLintConfig[]>} T
 * @param {T} factory
 * @returns {T}
 */
export function defineConfig(factory) {
  return factory
}

/**
 * @param {Options} options
 * @param {(Config | ESLintConfig)[]} configs
 * @returns
 */
export function resolveConfigs(options, configs) {
  return concat(...[...configs, ...options.configs].map(config => {
    return typeof config === 'function' ? config(options) : config
  }))
}

/**
 * @template {ESLintConfig | ESLintConfig[]} T
 * @param {Partial<ESLintConfig>} [patch]
 * @param {T} configs
 * @returns {T}
 */
export function overrides(configs, patch) {
  if (!patch) return configs
  return Array.isArray(configs)
    ? configs.map(config => overrides(config, patch))
    : { ...configs, ...patch }
}
