<demo>
常规使用
</demo>
<template>
  <div>
    <Button>你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
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
