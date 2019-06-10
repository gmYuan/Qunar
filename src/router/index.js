import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',   
      component: () => import('@/pages/Home/Home'), //路由懒加载,仅在路由跳转时 才加载相关页面
    },

  ]
})