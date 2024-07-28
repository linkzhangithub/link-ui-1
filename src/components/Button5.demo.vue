<demo>
支持显示加载中
</demo>
<template>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";
//此处为相对路径示例，使用时请将路径替换为"link-ui-1"
export default {
  components: {
    Button,
  },
};
</script>
