<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <section class="sidebar-group">
          <p class="sidebar-group-title">文档</p>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始使用</router-link>
            </li>
          </ol>
        </section>
        <section class="sidebar-group">
          <p class="sidebar-group-title">Basic 基础组件</p>
          <ol>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
          </ol>
        </section>
        <section class="sidebar-group">
          <p class="sidebar-group-title">Form 表单组件</p>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 开关</router-link>
            </li>
          </ol>
        </section>
        <section class="sidebar-group">
          <p class="sidebar-group-title">Navigation 导航</p>
          <ol>
            <li>
              <router-link to="/doc/tabs">Tabs 标签页</router-link>
            </li>
          </ol>
        </section>

        <section class="sidebar-group">
          <p class="sidebar-group-title">Feedback 反馈组件</p>
          <ol>
            <li>
              <router-link to="/doc/dialog">Dialog 对话框</router-link>
            </li>
          </ol>
        </section>
      </aside>
      <main class="doc-content">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); //get
    return { menuVisible };
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 40px;
    padding-left: 350px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  .doc-content {
    flex-grow: 1;
    padding: 64px 64px 16px 16px;
  }
}

aside {
  background: #fafafa;
  position: fixed;
  width: 350px;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  padding: 68px 48px 90px 48px;
  overflow-y: scroll;
  overscroll-behavior: contain;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #fff;
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: whitesmoke;
    opacity: 0.2;
  }
  &:hover {
    &::-webkit-scrollbar {
      display: block;
    }
  }

  .sidebar-group {
    padding-top: 24px;

    .sidebar-group-title {
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 8px;
      line-height: 24px;
    }

    ol {
      > li {
        position: relative;

        > a {
          padding: 10px 16px;
          display: block;
          text-decoration: none;
          border-radius: 8px;
          color: #606266;
          font-weight: 500;
          transition: color 0.3s;
          font-family: "PingFang SC", sans-serif;
          font-size: 0.9rem;

          &:hover {
            color: #1890ff;
          }

          &:after {
            content: "";
            top: 0;
            right: 0;
            height: 100%;
            position: absolute;
            bottom: 0;
            opacity: 0;
            border-right: 3px solid #1890ff;
            transform: scaleY(0.0001);
            transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
              opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          &.router-link-active {
            color: #409eff;
            background-color: rgba(64, 158, 255, 0.1);
            font-weight: 600;
          }

          //&.router-link-active:after {
          //  opacity: 1;
          //  transform: scaleY(1);
          //}
        }
      }
    }
  }
}
</style>
