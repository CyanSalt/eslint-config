# @cyansalt/eslint-config

[![npm](https://img.shields.io/npm/v/@cyansalt/eslint-config.svg)](https://www.npmjs.com/package/@cyansalt/eslint-config)

My ESLint configuration preset.

## Installation

```shell
npm install --save-dev @cyansalt/eslint-config
```

## Usage

```javascript
// eslint.config.js
import config from '@cyansalt/eslint-config'

export default config()
```

### Customization

```javascript
// eslint.config.js
import config from '@cyansalt/eslint-config'
import { customize } from '@cyansalt/eslint-config/configs/vue.js'

export default config({
  configs: [
    ...customize({ vue: { legacy: true } }, {
      files: ['**/vue2/**.vue'],
    }),
  ],
})
```

## Options

```javascript
// eslint.config.js
import config from '@cyansalt/eslint-config'

export default config({

  // Whether to enable TypeScript rules.
  // It will be enabled when `typescript` is installed in the project by default.
  // This option also supports an object of the form `{ mixed: true }`.
  // `mixed` indicates whether this project is a mixed TS and JS project
  // which defaults to the value of `compilerOptions.checkJs` in tsconfig.
  typescript: true,

  // Whether to enable Babel rules.
  // It will be enabled when the project includes `babel.config.js` by default.
  // This option will have no effect when non-mixed typescript is enabled.
  babel: true,

  // Whether to enable React rules.
  // It will be enabled when `react` is installed in the project by default.
  react: true,

  // Whether to enable Vue rules.
  // It will be enabled when `vue` is installed in the project by default.
  // This option also supports an object of the form { legacy: 2.7, macros: true }.
  // `legacy` indicates whether Vue is 2.7 (`2.7`) or earlier (`true`)
   // which comes from the current Vue version by default.
   // `macros` indicates whether to enable compiler macros
   // which is determined based on whether the project has Vue Macros installed by default.
  vue: true,

  // Whether to enable JSX.
  // It will be determined based on `compilerOptions.jsx` in tsconfig by default.
  jsx: true,

  // Additional configurations.
  // Each item in the array can be an ESLint flat config or its array,
  // or a function that returns one or more configs.
  // When the type is a function, it accepts the parsed complete options as a parameter.
  configs: [],

})
```
