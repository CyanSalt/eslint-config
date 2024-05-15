<script lang="ts" setup>
// eslint-disable-next-line no-eval
const value = eval('1 + 1')

enum Foo {
  // eslint-disable-next-line @typescript-eslint/prefer-enum-initializers
  bar,
}
</script>

<template>
  <!-- eslint-disable-next-line vue/this-in-template -->
  <p>{{ this.value }}{{ value }}{{ Foo.bar }}</p>
</template>
