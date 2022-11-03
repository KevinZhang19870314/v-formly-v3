<template>
  <el-breadcrumb class="breadcrumb-wrapper">
    <el-breadcrumb-item v-for="(item, index) in routes" :key="index">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const routes = ref<any[]>([]);

watchEffect(() => {
  routes.value = route.matched.filter((item) => !!item.meta?.title);
});
</script>
<style scoped lang="less">
.breadcrumb-wrapper {
  margin-left: 0.5rem !important;
}
</style>
