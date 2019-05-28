
// 预读文档:
// 01 [vue-router的 name属性作用](https://www.jianshu.com/p/f86fea2cd109)


import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',   //S1 name的作用: 通常用于在router-view中识别渲染对应组件，可参考 文档01
      component: () => import('@/pages/Home/home'),   //S2 路由懒加载,仅在路由跳转时 才加载相关页面
    },

  ]
})
