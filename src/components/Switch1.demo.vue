<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import { ref } from "vue";
import { Switch } from "../lib/index";
//此处为相对路径示例，使用时请将路径替换为"link-ui-1"
export default {
  components: { Switch },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>
