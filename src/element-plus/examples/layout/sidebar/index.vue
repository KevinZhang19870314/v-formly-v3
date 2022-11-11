<template>
  <div class="layout-sidebar">
    <Menu />
  </div>
</template>

<script setup lang="ts">
import Menu from "./Menu.vue";
</script>

<style scoped lang="less">
.layout-sidebar {
  margin-top: calc(var(--header-height) * -1);
  &--fixed {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
  }
}
</style>
