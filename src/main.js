import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


// 引入公有样式
import '@scss/reset.scss'
import '@scss/common.scss'
import '@scss/iconfont.css'


// 引入公有第3方 JS文件
import  FastClick from 'fastclick'
FastClick.attach(document.body);

// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)



Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
