<template>
  <div class="layout-content">
    <router-view v-slot="{ Component, route }">
      <component
        :is="Component"
        :key="route.fullPath"
        class="content-wrapper"
      />
    </router-view>
  </div>
</template>

<style scoped lang="less">
.layout-content {
  position: relative;
  min-height: calc(100vh - var(--header-height));
  margin: 24px;
  background: white;
  .content-wrapper {
    height: 100%;
    padding: 32px;
    max-width: 800px;

    :deep(.btns) {
      display: flex;
      justify-content: flex-end;

      .ant-btn {
        margin-right: 8px;
      }
    }
  }
}
</style>
