import baseConfig from './base.mjs'
import typescriptConfig from './index.mjs'

export default [
  {
    ...baseConfig[0],
    files: ['**/*.{cts,mts,ts,tsx}'],
  },
  baseConfig[1],
  {
    ...typescriptConfig[typescriptConfig.length - 2],
    files: ['**/*.{cts,mts,ts,tsx}'],
  },
  {
    ...typescriptConfig[typescriptConfig.length - 1],
    files: ['**/*.{cts,mts,ts,tsx}'],
  },
]
