<template>
  <!-- <HelloWorld /> -->
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :router="true"
      @select="handleSelect"
    >
      <el-menu-item index="/">vue-web-template</el-menu-item>
      <el-menu-item index="/"></el-menu-item>
      <el-menu-item index="/"></el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
  data() {
    return {
      activeIndex: "1",
    };
  },
  watch: {
    "$route.path": {
      handler(routePath) {
        this.initMenuActive(routePath);
      },
      immediate: true,
    },
  },
  methods: {
    initMenuActive(routePath) {
      // 路由跳转时，标记在导航的哪个选项下对应的路由，css高亮显示
      if (routePath == "/") {
        this.activeIndex = "/draw";
      } else if (routePath == "/ly") {
        this.activeIndex = "/repo";
      } else {
        this.activeIndex = routePath;
      }
    },
    handleSelect(key, keyPath) {
      if (key == "/") {
        window.location.href = "/";
      }
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #140f1d;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-size: cover;
} */
/* * {
            margin: 0;
            padding: 0;
            background-size: cover;
        }
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #140f1d;
        } */
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #e1ffff;
}
</style>
