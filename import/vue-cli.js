module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: [
          '.tsx',
          '.ts',
          '.mjs',
          '.js',
          '.jsx',
          '.vue',
          '.json',
          '.wasm',
        ],
      },
    },
  },
}
