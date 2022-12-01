<template>
  <div @click="toggleCollapsed">
    <d-icon name="collapse" :rotate="getCollapsed ? 180 : 0"></d-icon>
  </div>
</template>

<script setup lang="ts">
import { useCollapsed } from "../useCollapsed";

const { getCollapsed, toggleCollapsed } = useCollapsed();
</script>
