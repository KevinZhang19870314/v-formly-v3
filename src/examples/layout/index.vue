<template>
  <a-layout>
    <LayoutHeader />
    <a-layout>
      <LayoutSidebar />
      <a-layout :class="getLayoutClass">
        <LayoutContent />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCollapsed } from "./useCollapsed";
import LayoutHeader from "./header/index.vue";
import LayoutSidebar from "./sidebar/index.vue";
import LayoutContent from "./content/index.vue";

const { getCollapsed } = useCollapsed();

const getLayoutClass = computed(() => {
  return {
    "default-layout-main": true,
    "default-layout-main--collapsed": getCollapsed.value,
  };
});
</script>

<style scoped lang="less">
.default-layout-main {
  transition-property: all cubic-bezier(0.4, 0, 0.2, 1) 200ms;

  padding-top: var(--header-height);
  padding-left: var(--sidebar-width);

  &--collapsed {
    padding-left: var(--sidebar-collapsed-width);
  }
}
</style>
