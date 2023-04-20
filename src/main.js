import Vue from "vue";
import App from "./App.vue";

import router from "./router/index";
import ElementUI from "element-ui";
Vue.use(ElementUI);

import "element-plus/dist/index.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
