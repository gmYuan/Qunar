import Vue from 'vue'
import App from './App'
import router from './router'

// 引入公有样式
import './scss/reset.scss'
import './scss/common.scss'

// 引入公有JS文件
import  FastClick from 'fastclick'
FastClick.attach(document.body);




Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
