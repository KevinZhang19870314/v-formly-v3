<template>
  <d-layout>
    <LayoutHeader />
    <d-layout class="d-flex-row">
      <LayoutSidebar />
      <d-layout :class="getLayoutClass">
        <LayoutContent />
      </d-layout>
    </d-layout>
  </d-layout>
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
  background: #f0f2f5;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 200ms;
}
.d-flex-row {
  display: flex;
  flex-direction: row;
}
</style>
