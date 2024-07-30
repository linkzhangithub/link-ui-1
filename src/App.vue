<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width > 500);
    provide("menuVisible", menuVisible); //set
    router.afterEach(() => {
      //这里的if判断不能用width作为参考，因为width是在setup函数中定义的常量，不会随着视图宽度变化而更新，如果用width后将页面横向拖拽，会有显示bug
      if (document.documentElement.clientWidth <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
