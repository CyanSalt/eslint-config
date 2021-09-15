# @cyansalt/eslint-config

My ESLint configuration.

## Installation

```shell
npm install @cyansalt/eslint-config
```

## Without Configuration

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

The ruleset will check your project dependencies and enable available configurations automatically. This eliminates the need for you to know any specific ruleset configuration below.

## Basic Ruleset

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt/eslint-config/base',
  ],
  // ...
}
```

Note: `eslint:recommended` is not needed since `base` has extended the rule set by default. However, if you need to use a configuration that is not supported by ESLint by default, such as [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser), you need to configure it manually.

## Framework Intergrations

The configurations support both Vue and React.

### Vue

*Need to install [`eslint-plugin-vue`](https://eslint.vuejs.org/) manually*

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt/eslint-config/base',
    '@cyansalt/eslint-config/vue/v2',
  ],
  // ...
}
```

and you also need not to declare `plugin:vue/essential` or `plugin:vue/vue3-essential` for the same reason.

### Vue 3

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt/eslint-config/base',
    '@cyansalt/eslint-config/vue/v3',
  ],
  // ...
}
```

### React

*Need to install [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) manually*

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt/eslint-config/base',
    '@cyansalt/eslint-config/react/base',
  ],
  // ...
}
```

## TypeScript

*Need to install [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) and [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) manually*

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt/eslint-config/base',
    '@cyansalt/eslint-config/typescript',
  ],
}
```

### With Vue

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt/eslint-config/base',
    '@cyansalt/eslint-config/vue/v3',
    '@cyansalt/eslint-config/typescript',
    '@cyansalt/eslint-config/vue/typescript',
  ],
}
```

## Plugins

We have provided a number of plugin configurations as our recommendation.

### Galaxy

Various ESLint rules in one plugin.

*Need to install [`eslint-plugin-galaxy`](https://www.npmjs.com/package/eslint-plugin-galaxy) manually*

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    'cyansalt/eslint-config/base',
    'cyansalt/eslint-config/galaxy/base',
    // for Vue
    'cyansalt/eslint-config/galaxy/vue',
  ],
}
```

### Import

Support linting of import/export syntax.

*Need to install [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) manually*

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt/eslint-config/base',
    '@cyansalt/eslint-config/import',
  ],
}
```

### 🦄 Unicorn

Support linting for frequent fault.

*Need to install [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn) manually*

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt/eslint-config/base',
    '@cyansalt/eslint-config/unicorn',
  ],
}
```

### Vue Scoped CSS

Support linting for Vue Scoped CSS (and other dialects).

*Need to install [`eslint-plugin-vue-scoped-css`](https://www.npmjs.com/package/eslint-plugin-vue-scoped-css) manually*

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt/eslint-config/base',
    '@cyansalt/eslint-config/vue/scoped-css',
  ],
}
```

Note: You can disable the rules below for more convenient development in Vue 2.

```javascript
// .eslintrc.js
module.exports {
  // ...
  rules: {
    'vue-scoped-css/require-scoped': 'off',
  },
}
```

### React Hooks

Support linting for React Hooks.

*Need to install [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) manually*

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt/eslint-config/base',
    '@cyansalt/eslint-config/react/hooks',
  ],
}
```

## CLI

You can update current ESLint packages with `npx`:

```shell
npx @cyansalt/eslint-config --update
```

- You can pass `-y` to skip the question and update packages immediately.
- Or install/update all recommended packages with `-a` argument.
