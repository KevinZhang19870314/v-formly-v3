<template>
  <div @click="toggleCollapsed">
    <el-icon>
      <Expand v-if="getCollapsed" />
      <Fold v-else />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { useCollapsed } from "../useCollapsed";

const { getCollapsed, toggleCollapsed } = useCollapsed();
</script>
