// Side Effects (triggers effects outside the component)
export const sideEffects = [
  'el',
]

// Global Awareness (requires knowledge beyond the component)
export const globalAwareness = [
  'name',
  'key', // for Nuxt
  'parent',
  'compatConfig', // for @vue/compat
]

// Component Type (changes the type of the component)
export const componentType = [
  'functional',
]

// Template Modifiers (changes the way templates are compiled)
export const templateModifiers = [
  ['delimiters', 'comments'],
]

// Template Dependencies (assets used in the template)
export const templateDependencies = [
  ['components', 'directives', 'filters'],
]

// Composition (merges properties into the options)
export const composition = [
  'extends',
  'mixins',
  [
    'provide',
    'inject',
  ],
]

// Page Options (component rendered as a router page)
export const pageOptions = [
  'ROUTER_GUARDS', // for Vue Router
  'layout', // for Nuxt
  'middleware', // for Nuxt
  'validate', // for Nuxt
  'scrollToTop', // for Nuxt
  'transition', // for Nuxt
  'loading', // for Nuxt
]

// Interface (the interface to the component)
export const interfaces = [
  'inheritAttrs',
  'model',
  ['props', 'propsData'],
  'emits',
  // Note:
  // The `setup` option is included in the "Composition" category,
  // but the behavior of the `setup` option requires the definition of "Interface",
  // so we prefer to put the `setup` option after the "Interface".
  'setup',
]

// Local State (local reactive properties)
export const localState = [
  'asyncData', // for Nuxt
  'data',
  'fetch', // for Nuxt
  'head', // for Nuxt
  'subscriptions', // for vue-rx
  'apollo', // for vue-apollo
  'computed',
]

// Events (callbacks triggered by reactive events)
export const events = [
  'watch',
  'watchQuery', // for Nuxt
  'LIFECYCLE_HOOKS',
]

// Non-Reactive Properties (instance properties independent of the reactivity system)
export const nonReactiveProperties = [
  'methods',
  'observableMethods', // for vue-rx
]

// Rendering (the declarative description of the component output)
export const rendering = [
  ['template', 'render'],
  'renderError',
]
