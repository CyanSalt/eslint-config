import { concat } from 'eslint-flat-config-utils'

/**
 * @typedef {import('eslint').Linter.FlatConfig} FlatConfig
 */
/**
 * @template T
 * @typedef {import('type-fest').Promisable<T>} Promisable<T>
 */
/**
 * @typedef {import('./options').Options} Options
 */

/**
 * @typedef {(options: Options) => Promisable<FlatConfig | FlatConfig[]>} Config
 */

/**
 * @template {(options: Options) => Promisable<FlatConfig | FlatConfig[]>} T
 * @param {T} factory
 * @returns {T}
 */
export function defineConfig(factory) {
  return factory
}

/**
 * @param {Options} options
 * @param {(Config | FlatConfig)[]} configs
 * @returns
 */
export function resolveConfigs(options, configs) {
  return concat(...[...configs, ...options.configs].map(config => {
    return typeof config === 'function' ? config(options) : config
  }))
}

/**
 * @template {FlatConfig | FlatConfig[]} T
 * @param {Partial<FlatConfig>} patch
 * @param {T} configs
 * @returns {T}
 */
export function overrides(configs, patch) {
  return Array.isArray(configs)
    ? configs.map(config => overrides(config, patch))
    : { ...configs, ...patch }
}
