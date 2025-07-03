<script setup>
// eslint-disable-next-line no-eval
const value = eval('1 + 1')
</script>

<template>
  <!-- eslint-disable-next-line vue/this-in-template -->
  <p>{{ this.value }}{{ value }}</p>
</template>

<style scoped>
.foo,
.bar {
  color: red;
}
</style>
