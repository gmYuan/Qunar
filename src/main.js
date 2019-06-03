import Vue from 'vue'
import App from './App'
import router from './router'

// 引入公有样式
import '@scss/reset.scss'
import '@scss/common.scss'
import '@scss/iconfont.css'


// 引入公有第3方 JS文件
import  FastClick from 'fastclick'
FastClick.attach(document.body);




Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
