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
module.exports {
  // ...
  extends: [
    '@cyansalt',
  ],
  // ...
}
```

Note: `eslint:recommended` is not needed since it has been extended by default. However, if you need to use a configuration that is not supported by ESLint by default, such as [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser), you need to configure it manually.

### Framework Intergrations

The configurations support both Vue and React.

#### Vue

```javascript
// .eslintrc.js
module.exports {
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

and you also need not to declare `plugin:vue/essential` or `plugin:vue/vue3-essential` for the same reason.

#### Vue 2

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/vue/v2',
  ],
  // ...
}
```

#### React

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/react',
  ],
  // ...
}
```

### TypeScript

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/typescript',
  ],
}
```

### Babel

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/babel',
  ],
}
```

### Plugins

We have provided a number of plugin configurations as our recommendation.

#### Galaxy

Various ESLint rules in one plugin.

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/galaxy',
    // for Vue
    '@cyansalt/eslint-config/galaxy/vue',
  ],
}
```

#### Import

Support linting of import/export syntax.

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/import',
  ],
}
```

#### 🦄 Unicorn

Support linting for frequent fault.

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/unicorn',
  ],
}
```

#### Vue Scoped CSS

Support linting for Vue Scoped CSS (and other dialects).

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/vue/scoped-css',
    // for Vue 2
    '@cyansalt/eslint-config/vue/scoped-css/v2',
  ],
}
```

#### React Hooks

Support linting for React Hooks.

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/react/hooks',
  ],
}
```
