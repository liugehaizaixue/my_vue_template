import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Hello from '@/components/HelloWorld'  // 引入根目录下的Hello.vue组件

const routes=[ {                    // 每一个链接都是一个对象
    path: '/hello',         // 链接路径
    name: 'Hello',     // 路由名称，
    component: Hello   // 对应的组件模板
  },{
    path:'/',
    component:Hello,
  }
]

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router