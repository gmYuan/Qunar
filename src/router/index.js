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
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/City/City')
    },

    {
      name: 'detail',
      path: '/detail/:id',
      component: () => import('@/pages/detail/detail')
    },
  ],

  scrollBehavior (to, from, savedPosition) { 
    return { x: 0, y: 0 }     // 切换组件时默认显示顶部
  }

})
