import { createRequire } from 'node:module'
import { resolve as resolveAlias } from 'eslint-import-resolver-alias'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import importX from 'eslint-plugin-import-x'
import { defineConfig } from '../config.js'

function createResolverNext(name, resolve, options) {
  return {
    interfaceVersion: 3,
    name,
    resolve(source, file) {
      return resolve(source, file, options)
    },
  }
}

export default defineConfig(options => {
  const { resolve } = createRequire(import.meta.url)
  return [
    {
      name: '@cyansalt/import-x/setup',
      plugins: {
        'import-x': importX,
      },
      settings: {
        'import-x/internal-regex': '^@/',
        'import-x/resolver-next': [
          // Must go before any other resolvers for typescript files
          createTypeScriptImportResolver({
            extensions: [
              '.ts',
              '.tsx',
              '.d.ts',
              '.js',
              '.jsx',
              '.json',
              '.vue',
            ],
          }),
          createResolverNext('eslint-import-resolver-alias', resolveAlias, {
            map: [
              ['@', './src'],
            ],
            extensions: [
              '.ts',
              '.tsx',
              '.js',
              '.jsx',
              '.json',
              // `eslint-import-resolver-alias` will break node module resolving if `.d.ts` goes before `.js`
              '.d.ts',
              '.vue',
            ],
          }),
        ],
        'import-x/parsers': {
          [resolve('@typescript-eslint/parser')]: ['.cts', '.mts', '.ts', '.tsx'],
          [resolve('vue-eslint-parser')]: ['.vue'],
        },
      },
      rules: {
        // 自动将类型导入修改为 import type 语句
        'import-x/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
        // import 语句必须在最前
        'import-x/first': 'error',
        // 自动为 import 之后添加空行
        'import-x/newline-after-import': 'warn',
        // 自动修复重复的 import
        'no-duplicate-imports': 'off',
        'import-x/no-duplicates': 'warn',
        // 自动去除空的导入块
        'import-x/no-empty-named-blocks': 'warn',
        // 禁止导出 let 和 var 声明的可变变量
        'import-x/no-mutable-exports': 'error',
        // 必须按照 内置 > 外部模块 > aliases > '../' > './' 声明 import 顺序
        'import-x/order': ['warn', {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', orderImportKind: 'asc' },
        }],
      },
    },
  ]
})
