# @cyansalt/eslint-config

[![npm](https://img.shields.io/npm/v/@cyansalt/eslint-config.svg)](https://www.npmjs.com/package/@cyansalt/eslint-config)

My ESLint base configuration.

## Installation

```shell
npm install --save-dev @cyansalt/eslint-config
```

## Usage

### Without Configuration

See [@cyansalt/eslint-config-preset](https://www.npmjs.com/package/@cyansalt/eslint-config-preset).

### Basic Ruleset

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    '@cyansalt',
  ],
  // ...
}
```

Or for [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/):

```javascript
// eslint.config.js
import jsConfig from '@cyansalt/eslint-config/flat/index.mjs'

export default {
  // ...
  ...jsConfig,
  // ...
}
```

Note: `eslint:recommended` is not needed since it has been extended by default. However, if you need to use a configuration that is not supported by ESLint by default, such as [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser), you need to configure it manually.

### Framework Intergrations

The configurations support both Vue and React.

#### Vue

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/vue',
    // for TypeScript
    '@cyansalt/eslint-config/vue/typescript',
  ],
  // ...
}
```

Or for [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/):

```javascript
// eslint.config.js
import jsConfig from '@cyansalt/eslint-config/flat/index.mjs'
import vueConfig from '@cyansalt/eslint-config/flat/vue/index.mjs'
import vueTypescriptConfig from '@cyansalt/eslint-config/flat/vue/typescript/index.mjs'

export default {
  // ...
  ...jsConfig,
  ...vueConfig,
  // for TypeScript
  ...vueTypescriptConfig,
  // ...
}
```

and you also need not to declare `plugin:vue/essential` or `plugin:vue/vue3-essential` for the same reason.

#### Vue 2

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/vue/v2',
  ],
  // ...
}
```

Or for [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/):

```javascript
// eslint.config.js
import jsConfig from '@cyansalt/eslint-config/flat/index.mjs'
import vueV2Config from '@cyansalt/eslint-config/flat/vue/v2.mjs'

export default {
  // ...
  ...jsConfig,
  ...vueV2Config,
  // ...
}
```

#### React

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/react',
  ],
  // ...
}
```

Or for [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/):

```javascript
// eslint.config.js
import jsConfig from '@cyansalt/eslint-config/flat/index.mjs'
import reactConfig from '@cyansalt/eslint-config/flat/react/index.mjs'

export default {
  // ...
  ...jsConfig,
  ...reactConfig,
  // ...
}
```

### TypeScript

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/typescript',
  ],
  // ...
}
```

Or for [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/):

```javascript
// eslint.config.js
import jsConfig from '@cyansalt/eslint-config/flat/index.mjs'
import typescriptConfig from '@cyansalt/eslint-config/flat/typescript/index.mjs'

export default {
  // ...
  ...jsConfig,
  ...typescriptConfig,
  // ...
}
```

### Babel

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/babel',
  ],
  // ...
}
```

Or for [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/):

```javascript
// eslint.config.js
import jsConfig from '@cyansalt/eslint-config/flat/index.mjs'
import babelConfig from '@cyansalt/eslint-config/flat/babel/index.mjs'

export default {
  // ...
  ...jsConfig,
  ...babelConfig,
  // ...
}
```

### Plugins

We have provided a number of plugin configurations as our recommendation.

#### Galaxy

Various ESLint rules in one plugin.

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/galaxy',
    // for Vue
    '@cyansalt/eslint-config/galaxy/vue',
    // for TypeScript
    '@cyansalt/eslint-config/galaxy/typescript',
  ],
  // ...
}
```

Or for [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/):

```javascript
// eslint.config.js
import jsConfig from '@cyansalt/eslint-config/flat/index.mjs'
import galaxyConfig from '@cyansalt/eslint-config/flat/galaxy/index.mjs'
import galaxyVueConfig from '@cyansalt/eslint-config/flat/galaxy/vue/index.mjs'
import galaxyTypescriptConfig from '@cyansalt/eslint-config/flat/galaxy/typescript.mjs'

export default {
  // ...
  ...jsConfig,
  ...galaxyConfig,
  // for Vue
  ...galaxyVueConfig,
  // for TypeScript
  ...galaxyTypescriptConfig,
  // ...
}
```

#### Import

Support linting of import/export syntax.

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/import',
  ],
  // ...
}
```

Or for [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/):

```javascript
// eslint.config.js
import jsConfig from '@cyansalt/eslint-config/flat/index.mjs'
import importConfig from '@cyansalt/eslint-config/flat/import.mjs'

export default {
  // ...
  ...jsConfig,
  ...importConfig,
  // ...
}
```

#### 🦄 Unicorn

Support linting for frequent fault.

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/unicorn',
  ],
  // ...
}
```

Or for [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/):

```javascript
// eslint.config.js
import jsConfig from '@cyansalt/eslint-config/flat/index.mjs'
import unicornConfig from '@cyansalt/eslint-config/flat/unicorn.mjs'

export default {
  // ...
  ...jsConfig,
  ...unicornConfig,
  // ...
}
```

#### Vue Scoped CSS

Support linting for Vue Scoped CSS (and other dialects).

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/vue/scoped-css',
    // for Vue 2
    '@cyansalt/eslint-config/vue/scoped-css/v2',
  ],
  // ...
}
```

Or for [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/):

```javascript
// eslint.config.js
import jsConfig from '@cyansalt/eslint-config/flat/index.mjs'
import vueScopedCssConfig from '@cyansalt/eslint-config/flat/vue/scoped-css/index.mjs'
import vueScopedCssV2Config from '@cyansalt/eslint-config/flat/vue/scoped-css/v2.mjs'

export default {
  // ...
  ...jsConfig,
  ...vueScopedCssConfig,
  // for Vue 2
  ...vueScopedCssV2Config,
  // ...
}
```

#### React Hooks

Support linting for React Hooks.

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/react/hooks',
  ],
}
```

Or for [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/):

```javascript
// eslint.config.js
import jsConfig from '@cyansalt/eslint-config/flat/index.mjs'
import reactHooksConfig from '@cyansalt/eslint-config/flat/react/hooks.mjs'

export default {
  // ...
  ...jsConfig,
  ...reactHooksConfig,
  // ...
}
```
