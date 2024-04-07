<template>
  <div>
    导航栏 |
    <router-link to="/">Link</router-link> |
    <router-link to="/xxx">Link2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
