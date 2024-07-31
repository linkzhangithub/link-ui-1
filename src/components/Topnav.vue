<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-link"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <strong><router-link to="/doc/install">快速安装</router-link></strong>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref, onMounted, ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); //get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    onMounted(() => {
      const screenWidth = ref(document.documentElement.clientWidth);
      window.onresize = () => {
        screenWidth.value = document.documentElement.clientWidth;
        menuVisible.value = screenWidth.value > 500;
      };
    });
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
$color: #1976d2;

.topnav {
  color: $color;
  display: flex;
  padding: 8px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    padding-left: 10px;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
