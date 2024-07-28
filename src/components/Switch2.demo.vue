<demo>
支持 disabled
</demo>
<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts">
import { Switch } from "../lib/index";
//此处为相对路径示例，使用时请将路径替换为"link-ui-1"
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>
