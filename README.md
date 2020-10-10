# @cyansalt/eslint-config

My ESLint configuration.

## Installation

```shell
npm install @cyansalt/eslint-config
```

## Usage

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

Note: `eslint:recommended` is not needed since `@cyansalt` has extended the rule set by default.

## Framework Intergrations

The configurations support both Vue and React.

### Vue

*Need to install `eslint-plugin-vue` manually*

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/vue',
  ],
  // ...
}
```

and you also need not to declare `plugin:vue/essential` for the same reason.

### Vue 3

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/vue/v3',
  ],
  // ...
}
```

### React

*Need to install `eslint-plugin-react` manually*

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

## TypeScript

*Need to install `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` manually*

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

### With Vue

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
    '@cyansalt/eslint-config/vue',
    '@cyansalt/eslint-config/typescript',
    '@cyansalt/eslint-config/vue/typescript',
  ],
}
```

## Plugins

We have provided a number of plugin configurations as our recommendation.

### Import

Support linting of import/export syntax.

*Need to install `eslint-plugin-import` manually*

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

### Unicorn

Support linting for frequent fault.

*Need to install `eslint-plugin-unicorn` manually*

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

### Vue Scoped CSS

Support linting for Vue Scoped CSS (and other dialects).

*Need to install `eslint-plugin-vue-scoped-css` manually*

```javascript
// .eslintrc.js
module.exports {
  // ...
  extends: [
    '@cyansalt',
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

*Need to install `eslint-plugin-react-hooks` manually*

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
